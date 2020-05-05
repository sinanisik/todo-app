import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Formik } from 'formik';

class TodoAppAdd extends Component {

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        completed: false,
                        priority: "high"
                    }}

                    onSubmit={(values, {resetForm})  => {
                        this.props.addTodo(values);
                        resetForm({})
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                        /* and other goodies */
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Todo Title Giriniz"
                                        value={values.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Todo Description Giriniz"
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </div>


                                <div className="form-group">
                                    <input
                                        type="radio"
                                        name="completed"
                                        id="completed-todo-field"
                                        value={values.completed}
                                        onChange={() => setFieldValue("completed", true)}
                                    />
                                    <label htmlFor="completed-todo-field">Completed</label>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="radio"
                                        name="completed"
                                        id="uncompleted-todo-field"
                                        value={values.completed}
                                        checked
                                        onChange={() => setFieldValue("completed", false)}
                                    />
                                    <label htmlFor="uncompleted-todo-field">Not Completed</label>
                                </div>

                                <div className="form-group">
                                    <select name="priority" value={values.priority} onChange={handleChange}>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="submit">Todo Ekle</button>
                                </div>
                            </form>
                    )}
                </Formik>

            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);