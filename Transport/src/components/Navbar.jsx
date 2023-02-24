import React, {useState, useEffect} from "react";
import logo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\logo.svg";
import jwt_decode from 'jwt-decode'

export function Navbar(){

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

    return(
        <nav>
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="menu">
          <ul class="menu-items">
            <li class="item"><a href="">Home</a></li>
            <li class="item"><a href="">About</a></li>
            <li class="item"><a href="">Service</a></li>
            <li class="item"><a href="">Contact</a></li>
            </ul>
        </div>
        <div class="logout">
          <img class="profile" src={credentials} alt="image here"/>

          <button class="logout-btn">logout</button>
        </div>
      </nav>
       
    );
}