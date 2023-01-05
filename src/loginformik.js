import React from 'react'
import { Formik, Form, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';
import { Addaccount, Inputdiv } from './styled';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import * as Yup from "yup"
import Signup from './signup';

const lOGINerror=Yup.object().shape({
    emailorphone:Yup.string().matches(/^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,"Email ve ya telefon nomresini duzgun daxil edin.").required("Email ve ya telefon nomresini daxil edin."),
    checkpassword:Yup.string().min(8,"Passwordun uzunlugu min 8 olmalidir.").required("Passwordu daxil edin.").matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Passwordu duzgun daxil edin.")
     
 })


const LoginFormik = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Formik
                initialValues={{
                    emailorphone: "",
                    checkpassword: "",
                    
                }
                }
                validationSchema={lOGINerror}
               
               
                onSubmit={(values, { resetForm }) => {
                  
                    const newTodoItem2 = {
                        id: uuidv4().substring(0, 3),
                        loginmail: values.emailorphone,
                        loginpassword: values.checkpassword,
                        

                    }
                console.log("LOG IN OBJECT:", newTodoItem2);
                resetForm({ values: '' })
                }
                }
            >
                {
                    ({ values ,errors,touched}) => (
                        <>
                            <Form className="table">
                                <Inputdiv >
                                    <div>
                                        <Field placeholder="Email or phone number" className="form-control  input_div2 mt-2" name="emailorphone"   />
                                        {errors.emailorphone && touched.emailorphone? <div className='mt-0 pt-0' style={{color:"red",fontSize:12}}>{errors.emailorphone}</div>:null}
                                        <Field placeholder="Password" className="form-control mt-2 input_div2" type='password' name='checkpassword'  />
                                        {errors.checkpassword && touched.checkpassword? <div className='mt-0 pt-0' style={{color:"red",fontSize:12}}>{errors.checkpassword}</div>:null}
                                        <div><button type="submit" className='btn btn-primary mt-2 mb-2'>Log in</button>

                                        </div>
                                        <div className='div2'> <a className='forgot'>Forgot password?</a></div>
                                        <hr className='m-0 p-2' />
                                        <div className='div2'><button type="button" className="btn btn-success button2" onClick={() => setShow(!show)}>Create new account</button></div>
                                    </div>
                                </Inputdiv>
                            </Form>
                             
                        </>
                    )
                }
            </Formik>
            {show && 
            <Addaccount className="shadow-lg p-3 mb-5 bg-body rounded">
                 <h2>Sign Up    <button className='Xbutton' onClick={() => setShow(!show)}><i className="bi bi-x "></i></button></h2>
                <p>It’s quick and easy.</p><hr className='m-0 p-0 ' />
                <Signup/>
            </Addaccount>}
        </div >
           
    );
}
export default LoginFormik;