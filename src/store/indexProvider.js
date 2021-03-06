
import { applyMiddleware, createStore } from 'redux';
import { createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger({
    collapsed: true
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    );

store.subscribe(() => {
    // console.log("Current value of States are: ", store.getState());
})


export default store;