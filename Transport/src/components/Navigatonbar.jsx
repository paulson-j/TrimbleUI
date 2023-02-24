import React, {useState, useEffect} from "react";
import logo from 'C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg'
import jwt_decode from 'jwt-decode'


export function Navigationbar(){

    // Code to get local storage credentials
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
             <nav class="navbar navbar-inverse fixed-nav-light">
    <div class="container-fluid ">
      <div class="navbar-header">
        <button type="button" class="nav-btn navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="120px" height='25px' />
        </a>
        </div>
      <div class="collapse navbar-collapse navbar-right" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class=""><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          {/* <!-- <li><a href="#"></a></li> --> */}
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Services
            <span class="caret"></span></a>
            <ul class="dropdown-menu shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <li><a href="#">Driver</a></li>
              <li><a href="#">Order</a></li>
              <li><a href="#">Assigned Details</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul class="nav navbar-nav">
          <li> <img class="profile" src={credentials} alt="" height="40px" width="40px" /></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
        </>
    );
}