import React from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import styled from 'styled-components';

const myColor = "rebeccapurple";

const StyledListItem = styled.div`
    background: ${myColor};
    color: ${props => props.textColor};
    padding: 10px;
    text-decoration: ${props => (props.completed ? "line-through" : "none")};

    &:hover {
        background: brown;
    }

`;

const TodoAppListItem = (props) => {
    return (

        <div>
            {/* <span style={{ textDecoration: props.completed ? "line-through" : "none" }} onClick={() => {
                props.toggleTodo(props.id);
            }}>{props.content}</span> */}

            <StyledListItem textColor="yellow" completed={props.completed} onClick={() => props.toggleTodo(props.id)}>
                <div>
                    {props.title}
                </div>
                <div>
                    {props.description}
                </div>
                <div>
                    <strong>{props.priority}</strong>
                </div>
                <button onClick={() => {
                    props.deleteTodo(props.id);
                }}>DELETE</button>
            </StyledListItem>

        </div>
    );
};


const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);