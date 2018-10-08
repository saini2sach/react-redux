
import ACTIONS from '../constants';

export function changeOriginAmount(amount) {
    return {
        type: ACTIONS.CHANGE_AMOUNT,
        data: amount
    }
}

export function updateActivity(categ, activity) {
    return {
        type: ACTIONS.UPDATE_ACTIVITY,
        category: categ,
        activity: activity 
    }
}