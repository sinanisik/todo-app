import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Formik } from 'formik';
import * as Yup from 'yup';

const todoAddValidation = Yup.object().shape({
    title: Yup.string().required("Title girmeden todo ekleyemezsiniz").max(10, "10 karakterden fazla giremezsiniz"),
    description: Yup.string().min(5, "5 karakterden az giremezsiniz")
});

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
                    validationSchema={todoAddValidation}

                    onSubmit={(values, { resetForm }) => {
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
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Todo Title Giriniz"
                                        value={values.title}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {
                                            errors.title && <h4>{errors.title}</h4>
                                        }
                                    </div>
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
                                <div>
                                    {
                                        errors.description && <h4>{errors.description}</h4>
                                    }
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
                        )
                    }}
                </Formik>

            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);