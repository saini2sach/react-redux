
import ACTIONS from '../constants';

const defaultState = {
    amount : 322,
    value: 20,
    category: 'Social',
    activity: 'Make a new friend'
}

const amount = (state= defaultState, action) => {
    switch(action.type) {
        case ACTIONS.CHANGE_AMOUNT: 
            return Object.assign({}, state, {amount: action.data});
        case ACTIONS.INCREMENT_1:
            return Object.assign({}, state, {value: state.value + 1})
        case ACTIONS.INCREMENT_5:
            return Object.assign({}, state, {value: state.value + 5})
        case ACTIONS.DECREMENT_1:
            return Object.assign({}, state, {value: state.value - 1})
        case ACTIONS.DECREMENT_5:
            return Object.assign({}, state, {value: state.value - 5})
        case ACTIONS.UPDATE_ACTIVITY:
            return Object.assign({}, state, {category: action.category, activity: action.activity})
        default: 
            return state
    }
}

export default amount;