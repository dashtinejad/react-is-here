var $count = $('#count');
var $add = $('#add');
var $sub = $('#sub');

// reducer function
function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0;
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function render() {
    $count.text( store.getState() );
}

var store = Redux.createStore(counter);
store.subscribe(render);

$add.on('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});

$sub.on('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});

render();