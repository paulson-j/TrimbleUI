import React, {useEffect,useState} from "react";
import { Navigationbar } from "./Navigatonbar";
import { Driver } from "./Driver";
import jwt_decode from 'jwt-decode'
import { Footer } from "./Footer";

export function Driverpage(){
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
            <Navigationbar></Navigationbar>
            <div className="add-driver">
            <h2 className="fa"><strong> Add </strong><span class="text-muted">Driver <div className="fa-solid fa-user-plus"></div></span></h2>
            </div>
            <Driver></Driver>
            <div className="add-driver-end"></div>

            <Footer></Footer>

        </>
    );
}