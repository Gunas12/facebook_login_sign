import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logincss, Underword } from './styled';
import LoginFormik from './loginformik';
function Login() {
    return (
        <Logincss>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-6s'>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='facebbok_icon' />
                        <h2>Connect with friends and the world around you on Facebook.</h2>
                    </div>
                    <div className='col-6'> <LoginFormik />
                        <Underword className='ms-5 small'><a className='underww'><b>Create a Page</b></a><span> for a celebrity, brand or business.</span></Underword>
                    </div>

                </div>

            </div>
        </Logincss>
    )
}

export default Login