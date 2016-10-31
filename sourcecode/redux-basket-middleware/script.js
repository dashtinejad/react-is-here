// logger middleware
const loggerMiddleware = store => next => action => {
    const prevState = store.getState();
    const result = next(action);
    const nextState = store.getState();

    console.group('Dispatch', new Date());
    console.log('Prev State', prevState);
    console.log('Action', action);
    console.log('Next state', nextState);
    console.groupEnd();

    return result;
};

// filter middleware
const filterMiddleware = store => next => action => {
    if (action.type == 'ADD_PRODUCT') {
        if (action.product == 'Blueberry') {
            console.group('Filtered', new Date());
            console.warn('This product is not allowed :', action.product);
            console.groupEnd();

            return false;
        }
    }

    return next(action);
};

// check duplicate middleware
const checkDuplicatesMiddleware = store => next => action => {
    if (action.type == 'ADD_PRODUCT') {
        const s = store.getState().slice(); 
        let hasProductAlready = s.indexOf(action.product) > -1;
        
        if (hasProductAlready) {
            console.group('Duplicate Found', new Date());
            console.warn('This product is already in the basket :', action.product);
            console.groupEnd();

            return false;
        }

        return next(action);
    }
};

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

var store = Redux.createStore(reducer, Redux.applyMiddleware(loggerMiddleware, filterMiddleware, checkDuplicatesMiddleware));
// console.log(store.getState());

store.subscribe(() => {
    const basket = store.getState();
    $('#result').html(basket.join('<br />'));
});

$('button').on('click', function () {
    const product = $(this).text();

    store.dispatch(addProduct(product));
});