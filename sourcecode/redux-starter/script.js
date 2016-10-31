function reducer(state = 'Hello World', action) {
    // console.log('this function will call automatically with `createStore` function');
    // console.log('state : ', state, typeof state);
    // console.log(action);

    switch (action.type) {
        case 'NEW_CHARACTER':
            return state + action.char;

        case 'BACKSPACE':
            return state.substr(0, state.length - 1);

        default:
            return state;
    }
}

var store = Redux.createStore(reducer);
// console.log(store.getState());

store.subscribe(_ => console.log('State Changed :', store.getState()));

store.dispatch({
    type: 'NEW_CHARACTER',
    char: '!'
});

// console.log(store.getState());

store.dispatch({
    type: 'NEW_CHARACTER',
    char: ' Wonderfull'
});

// console.log(store.getState());


store.dispatch({ type: 'BACKSPACE' });
store.dispatch({ type: 'BACKSPACE' });
store.dispatch({ type: 'BACKSPACE' });
store.dispatch({ type: 'BACKSPACE' });

// console.log(store.getState());


