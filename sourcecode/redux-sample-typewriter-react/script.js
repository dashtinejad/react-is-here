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
    constructor(props, context) {
        super(props, context);

        const store = props.store;

        this.state = {
            text: store.getState()
        };

        store.subscribe(() => {
            this.setState({
                text: store.getState()
            });
        });

        document.onkeyup = function (e) {
            const char = e.key;

            if (char.length === 1) {
                store.dispatch(insertCharacter(char));
            }
            else if (char == 'Backspace') {
                store.dispatch(removeCharacter());
            }
        };
    }

    render() {
        const text = this.state.text;
        return <div>{text}</div>;
    }
}

ReactDOM.render(<View store={store} />, document.getElementById('app'));