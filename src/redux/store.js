import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducer, notificationReducer } from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    todoReducer: todoReducer,
    notificationReducer: notificationReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;