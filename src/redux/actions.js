import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './types';

export const addTodo = (newTodoObject) => {
    // const add = () => {
    //     return {
    //         type: ADD_TODO,
    //         payload: content
    //     }
    // }
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: newTodoObject
        });
        dispatch(showNotification(`${newTodoObject.title} eklendi`));
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
};

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
        dispatch(showNotification("TODO silindi."));

    }
};



export const showNotification = (content) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: content
        });

        setTimeout(() => {
            dispatch(hideNotification());
        }, 2000);
    }
}

export const hideNotification = () => {
    return {
        type: HIDE_NOTIFICATION
    }
}