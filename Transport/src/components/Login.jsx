import React from 'react'
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';

export function Login() {

    const navigate = useNavigate()
    const responseMessage = (response) =>{
        localStorage.setItem("user",JSON.stringify(response))
        navigate('/driver')
    };

    const errormessage = (error)=>{
        console.log(error);
    }


    return ( 
        <>
        <GoogleLogin onSuccess={responseMessage} onError={errormessage}></GoogleLogin>
        </>
     );
}

