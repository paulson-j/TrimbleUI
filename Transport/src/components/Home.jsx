import React, {useEffect,useState} from "react";
import { Navbar } from "./Navbar";
import jwt_decode from 'jwt-decode'

export function Home(){
    const [credentials, setCredentials] = useState();
   
    useEffect(() => {
        const storedCredentials = localStorage.getItem('user');
        if (storedCredentials) {
          setCredentials((storedCredentials));
        }
        let webToken=storedCredentials.substring(storedCredentials.indexOf(':')+1,storedCredentials.indexOf(','));
        
        console.log(webToken);
        var decoded = jwt_decode(webToken);
        setCredentials(decoded['picture'])

      }, []);


    return (
        <>
            <Navbar></Navbar>

            <h2>Home</h2>
            <img class="profile" src={credentials} alt="image here"/>

        </>
    );
}