import React, { useEffect } from "react";

import logo from 'C:\\Users\\paulsoj\\React\\transportfeb24\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg'
// import {Navigationbar} from '../components/Navigationbar';
import {Footer} from '../components/Footer';
import {Login} from '../components/Login'
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Landingpage(){
    
useEffect(()=>{
    localStorage.removeItem('user')
},[])

    return (
        <>
            {/* <Navigationbar></Navigationbar> */}

            <nav className="navbar trimble-color">
                <div className="container">
                <a href="" className='navbar-brand'>
                    <img src={logo} alt="" width="" height="30px" className="d-inline-block align-text-top"/>
                </a>
                <div className="navbar-nav">
                    <GoogleOAuthProvider clientId="109450856637-gh7250f9pmkr9j1m7pt9e7vjladkhfs8.apps.googleusercontent.com">
                        <Login></Login>
                    </GoogleOAuthProvider>
                </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5">
                    <img src="https://www.dispatchtrack.com/hubfs/saas%20logistics%20software.webp" alt="Driver image" width='100%'/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="container">
                            <div className="row"> <h1 className="text-center land-title"><u>Trimble Transport</u></h1></div>
                            <div className="row mt-3"><h5 className="text-center">Up until now, there’s been too much “work” in the way we work. That’s why we’re taking a new approach.</h5></div>
                            <hr />
                            <div className="row"><h5 className="text-center">Now, teams can push their work forward with Trimble, knowing that it is good for the job, good for the planet, and good for the communities they serve.</h5></div>
                        </div>
                       
                        
                        
                   
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>
            <Footer></Footer>

        </>
    );
}