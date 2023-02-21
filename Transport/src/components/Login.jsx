import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const responseMessage = (response) => {
        localStorage.setItem("user",JSON.stringify(response));
        console.log(response)
        navigate('/home')
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default Login;