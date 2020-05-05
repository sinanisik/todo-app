import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './types';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: Math.random(), ...action.payload}];
        case TOGGLE_TODO:
            const newState = state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
            return newState;
        case DELETE_TODO:
            return state.filter(todo => {
                return todo.id !== action.payload
            })
        default:
            return state;
    }
}

export const notificationReducer = (state = { showNotification: false, notificationText: "" }, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return { ...state, showNotification: true, notificationText: action.payload };
        case HIDE_NOTIFICATION:
            return { ...state, showNotification: false, notificationText: "" };
        default:
            return state;
    }
}