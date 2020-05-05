import React from 'react';
import { connect } from 'react-redux';
import TodoAppListItem from './TodoAppListItem';

const TodoAppList = (props) => {
    return (
        <div>
            <p>Todo List Items</p>
            {
                props.todos.map(todo => {
                    return <TodoAppListItem key={todo.id} {...todo} />
                })
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer
    }
}

export default connect(mapStateToProps)(TodoAppList);