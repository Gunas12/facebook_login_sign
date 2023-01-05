import React from 'react'
import { Formik, Form, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

import * as Yup from "yup"

const Signuperror=Yup.object().shape({
    firstname:Yup.string().required("Firstname i daxil edin."),
    lastname:Yup.string().required("Lastname i daxil edin."),
    
   mobilenumberormail:Yup.string().matches(/^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,"Email ve ya telefon nomresini duzgun daxil edin.").required("Email ve ya telefon nomresini daxil edin."),
   newpassword:Yup.string().min(8,"Passwordun uzunlugu min 8 olmalidir.").required("Passwordu daxil edin.").matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Passwordu duzgun daxil edin.")
    
})

const Signup = () => {
 

    return (
        <div>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    mobilenumberormail: "",
                    newpassword: "",
                    birthday: "",
                    birthmonth: "",
                    birthyear: "",
                    gender: [],
                    custom_1:"",
                    optional:"",

                }
                }
               validationSchema={Signuperror}
               
                onSubmit={(values, { resetForm }) => {
                    const newTodoItem = {
                        id: uuidv4().substring(0, 3),
                        name: values.firstname,
                        lastname: values.lastname,
                        mobilormail: values.mobilenumberormail,
                        password: values.newpassword,
                        birthday: [values.birthmonth, values.birthday, values.birthyear],
                        gender: values.gender,
                        custom_1:values.custom_1,
                        optional:values.optional,
                    }
                  
                    console.log("SIGN UP OBJECT:", newTodoItem);
                  
                    resetForm({ values: '' })
                    
                }
                }
            >
                {
                    ({ values ,errors,touched}) => (
                        <>
                            <Form className="table">  
                            <div>
                                        <div className='row input_name '>
                                        <div className='col-6'>
                                            <Field name="firstname" placeholder="First name" className="formnamelas form-control" /></div>
                                            {errors.firstname && touched.firstname? <div className='mt-0 pt-0 mb-0 pb-0' style={{color:"red",fontSize:12}}>{errors.firstname}</div>:null}
                                  
                                        <div className='col-6'>
                                            <Field name="lastname" placeholder="Last name" className="formnamelas form-control" /></div>
                                            {errors.lastname && touched.lastname? <div className='mt-0 pt-0 mb-0 pb-0' style={{color:"red",fontSize:12}}>{errors.lastname}</div>:null}
                                  
                                    </div>
                                    <div className="input_name1 mb-2">
                                        <Field name="mobilenumberormail" placeholder="Mobile number or email" className="formnamemail form-control" />
                                       {errors.mobilenumberormail && touched.mobilenumberormail? <div className='mt-0 pt-0 mb-0 pb-0' style={{color:"red",fontSize:12}}>{errors.mobilenumberormail}</div>:null}
                                    </div>
                                    <div className="input_name1 mb-1">
                                        <Field name="newpassword" placeholder="New password"  className="formnamemail form-control" type='password' />
                                        {errors.newpassword && touched.newpassword? <div className='mt-0 pt-0 mb-0 pb-0' style={{color:"red",fontSize:12}}>{errors.newpassword}</div>:null}
                                  </div>
                                    <div className='m-0'>
                                        <div className='row m-0'>
                                            <label htmlFor="birthday" className='genderlabel' >Birthday <i className="bi bi-question-circle-fill"></i></label>
                                            <div className='col-4 '>
                                                <Field component="select" name="birthmonth" className="form-select form-select mb-0" >
                                                    <option value="Yan">Yan</option>
                                                    <option value="Feb">Feb</option>
                                                    <option value="Mar">Mar</option>
                                                    <option value="Apr">Apr</option>
                                                    <option value="May">May</option>
                                                    <option value="Jun">Jun</option>
                                                    <option value="Jul">Jul</option>
                                                    <option value="Aug">Aug</option>
                                                    <option value="Sep">Sep</option>
                                                    <option value="Oct">Oct</option>
                                                    <option value="Nov">Nov</option>
                                                    <option value="Dec">Dec</option>
                                                </Field></div>
                                            <div className='col-4'>
                                                <Field component="select" name="birthday" className="form-select form-select mb-0">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </Field></div>
                                            <div className='col-4'>
                                                <Field component="select" name="birthyear" className="form-select form-select mb-0">
                                                    <option value="2023">2023</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="1999">1999</option>
                                                    <option value="1998">1998</option>
                                                    <option value="1997">1997</option>
                                                    <option value="1996">1996</option>
                                                    <option value="1995">1995</option>

                                                </Field></div>


                                        </div>
                                    </div>
                                    <div className='m-0 p-0'>
                                        <div className='gender_word mt-0 pt-0 pb-0' > <label htmlFor="gender" className='genderlabel'>Gender <i className="bi bi-question-circle-fill"></i></label></div>
                                        <div className='row gender_div_main m-0'>
                                            <div className='col-4 gender_div form-control'>Male  <Field type="radio" value="Male" name="gender" /></div>
                                            <div className='col-4 gender_div form-control'> Female  <Field type="radio" value="Female" name="gender" /></div>
                                            <div className='col-4 gender_div form-control'> Custom <Field type="radio" value="Custom" name="gender"  /> </div>
                                            
                                        </div>
                                        {
                                        values.gender==='Custom' ? <div >
                                        <Field component="select" name="custom_1" className="form-select form-select mb-2" >
                                        <option value="1">She: "Wish her a happy birthday!"</option>
                                        <option value="2">He: "Wish him a happy birthday!"</option>
                                        <option value="6">They: "Wish them a happy birthday!"</option>
                                            
                                        </Field>
                                        <Field   className=" form-control" name="optional" placeholder="Gender(optional)"/>
                                        </div>:null
                                    }
                                    </div>
                                   
                                    <p className='p_butt mb-2 mt-2'>People who use our service may have uploaded your contact information to Facebook. <br />
                                        By clicking Sign Up, you agree to our <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">Terms</a>, <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">Privacy Policy</a> and <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.</p>
                                    <div className='buttonsignup '> <button type="Submit" className="btn">Sign up</button></div>

                                    </div>

                            </Form>
                        </>
                    )

                }
            </Formik>
        </div >
    );
}

export default Signup;