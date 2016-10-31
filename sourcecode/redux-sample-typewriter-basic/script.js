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

const render = () => {
    const text = store.getState();
    View(text);
};

function View(text) {
    document.getElementById('app').innerText = text;
}

store.subscribe(render);



document.onkeyup = function (e) {
    const char = e.key;

    if (char.length === 1) {
        store.dispatch(insertCharacter(char));
    }
    else if (char == 'Backspace') {
        store.dispatch(removeCharacter());
    }
};