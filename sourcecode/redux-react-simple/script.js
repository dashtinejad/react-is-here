function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            let s = state.slice();
            s.push(action.product);
            return s;
        }

        default:
            return state;
    }
}

let addProduct = product => ({
    type: 'ADD_PRODUCT',
    product
});

var store = Redux.createStore(reducer);

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        const store = props.store;

        store.subscribe(() => {
            const basket = store.getState();
            this.setState({products: store.getState()});
        });

        this.state = {
            products: store.getState()
        };
    }

    addProduct(product) {
        const store = this.props.store;

        store.dispatch(addProduct(product));
    }

    render() {
        return (<div>
            <h1>A path to Redux</h1>

            <button onClick={() => this.addProduct('iPhone')}>iPhone</button>
            <button onClick={() => this.addProduct('MacBook')}>MacBook</button>
            <button onClick={() => this.addProduct('iPad')}>iPad</button>
            <button onClick={() => this.addProduct('Banana')}>Banana</button>
            <button onClick={() => this.addProduct('Orange')}>Orange</button>
            <button onClick={() => this.addProduct('Kiwi')}>Kiwi</button>
            <button onClick={() => this.addProduct('Blueberry')}>Blueberry</button>

            <hr />
            
            <ul>
                {this.state.products.map((product, i) => {
                    return <li key={i}>{product}</li>
                })}
            </ul>
        </div>);
    }
}

ReactDOM.render(<AppComponent store={store} />, document.getElementById('app'));