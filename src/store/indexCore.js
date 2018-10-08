
import { createStore } from 'redux';

const defaultState = {
    amount : 322,
    value: 20
}

const reducerFunc = (state= defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_AMOUNT': 
            return Object.assign({}, state, {amount: action.data});
        case 'INCREMENT_1':
            return Object.assign({}, state, {value: state.value + 1})
        case 'INCREMENT_5':
            return Object.assign({}, state, {value: state.value + 5})
        case 'DECREMENT_1':
            return Object.assign({}, state, {value: state.value - 1})
        case 'DECREMENT_5':
            return Object.assign({}, state, {value: state.value - 5})
        default: 
            return state
    }
}

const store = createStore(reducerFunc);

store.subscribe(() => {
    // console.log("Current value of States are: ", store.getState());
})


export default store;