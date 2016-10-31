const thunkMiddleware = store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) :
        next(action); 

const changeIsFetchingStatus = isFetching => ({
    type: 'USERS_IS_FETCHING',
    isFetching
});

const receiveUsers = (users) => ({
    type: 'RECEIVE_USERS',
    users
});


const users = (state = {
    isFetching: false,
    items: [],
}, action) => {
    switch (action.type) {
        case 'RECEIVE_USERS': {
            return Object.assign({}, state, {
                isFetching: false,
                items: action.users
            });
        }

        case 'USERS_IS_FETCHING': {
            return Object.assign({}, state, {
                isFetching: action.isFetching
            });
        }

        default:
            return state;
    }
};

function loadUsers() {
    return function (dispatch, getState) {
        if (getState().users.isFetching) {
            return;
        }
        
        dispatch(changeIsFetchingStatus(true));

        return $.get('https://api.github.com/users')
            .then(function (result) {
                dispatch(changeIsFetchingStatus(false));
                dispatch(receiveUsers(result));
            });
    };
}

const rootReducer = Redux.combineReducers({
    users
});

var store = Redux.createStore(rootReducer, Redux.applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log( store.getState() );
    // console.log( JSON.stringify( store.getState(), true, 2 ) );
});

$('#users').on('click', () => {
    store.dispatch(loadUsers());
});