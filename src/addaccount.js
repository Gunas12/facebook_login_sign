import React from 'react'
import { Formik, Form, Field, } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Adnewacc } from './styled';
const Addnewa = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    mobilenumberormail: "",
                    newpassword: "",
                    birthday: [],
                    gender: ["Female", "Male", "Custom"]
                }}
                onSubmit={(values, { resetForm }) => {
                    const newTodoItem = {
                        id: uuidv4().substring(0, 3),
                        name: values.firstname,
                        lastname: values.lastname,
                        mobilormail: values.mobilenumberormail,
                        password: values.newpassword,
                        birthday: values.birthday,
                        gender: values.gender,
                    }
                    console.log(values);
                    localStorage.setItem(uuidv4().substring(0, 3), JSON.stringify(newTodoItem));
                    resetForm({ values: '' })
                }
                }
            >
                {
                    ({ values }) => (
                        <>
                            <div className='row input_name '>
                                <div className='col-6'>
                                    <Field name="firstname" placeholder="First name" /></div>
                                <div className='col-6'>
                                    <Field name="lastname" placeholder="Last name" /></div>
                            </div>
                            <div>
                                <Field name="mobilenumberormail" placeholder="Mobile number or email" />
                            </div>
                            <div>
                                <Field name="newpassword" placeholder="New password" />
                            </div>
                            <div>
                                <label htmlFor="gender" >Gender</label><br />
                                <div className='row'>
                                    <div className='col-6'>Male <Field type="radio" value="Male" name="gender" /></div>
                                    <div className='col-6'> Female <Field type="radio" value="Female" name="gender" /></div>
                                </div>
                            </div>
                            <div> <button type="Submit" className='btn btn-primary mt-2 mb-3'>Log in</button></div>
                        </>







                    )

                }
            </Formik>
        </div >
    );
}

export default Addnewa;