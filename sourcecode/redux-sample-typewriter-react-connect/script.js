const reducer = (state = '', action) => {
    switch (action.type) {
        case 'CHARACTER_TYPED': {
            return state + action.char;
        }

        case 'BACKSPACE':
            return state.substr(0, state.length - 1);

        default:
            return state;
    }
};

const insertCharacter = char => ({
    type: 'CHARACTER_TYPED',
    char
});

const removeCharacter = () => ({ type: 'BACKSPACE' });

var store = Redux.createStore(reducer);

/* ***************************************************************** */


class View extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        document.onkeyup = function (e) {
            const char = e.key;

            if (char.length === 1) {
                props.insertCharacter(char);
            }
            else if (char == 'Backspace') {
                props.removeCharacter();
            }
        };
    }

    render() {
        const text = this.props.text;
        return <div>{text}</div>;
    }
}

function connect(ComponentToConnect, mapState, actionsToDispatch) {
    class ConnectedComponent extends React.Component {
        constructor(props, context) {
            super(props, context);

            const store = props.store;

            this.state = mapState(store.getState());

            store.subscribe(() => {
                this.setState(mapState(store.getState()));
            });

            this.actions = {};
            Object.keys(actionsToDispatch).forEach(action => {
                this.actions[action] = (...args) => {
                    store.dispatch(
                        actionsToDispatch[action](...args)
                    )
                };
            });
        }

        render() {
            return <ComponentToConnect {...this.props} {...this.state} />;
        }
    }

    return ConnectedComponent;
}


const ViewWithStore = connect(
    View,
    state => ({
        text: state
    }),
    { insertCharacter, removeCharacter }
);

ReactDOM.render(<ViewWithStore text="Mojtaba" store={store} />, document.getElementById('app'));