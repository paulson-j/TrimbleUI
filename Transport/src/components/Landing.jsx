import React, { useEffect, useState } from "react";
import "./Component.css"
import logo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\logo.svg";
import footerlogo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg"
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";



function Landing(){
  const navigate = useNavigate();

  const navigateToHome = () => {
    //google login code

    // const googleLogin = useGoogleLogin({
    //   onSuccess:async(tokenResponse)=>{
    //     console.log(tokenResponse);
    //     const userInfo = await axios.get('',{headers:{Authorization:'Bearer ${tokeneResponse.access_token}'}},);
    //     console.log(userInfo);

    //   },
    //   onError: errorResponse => console.log(errorResponse);
    // });

    // useEffect(()=>{googleLogin();});

    // const [userState,setUSerState] = useState();

    // return(
    //   <GoogleLogin onSuccess={credentialResponse => {
    //     console.log(credentialResponse);
    //     setUSerState(userState);
    //     navigate('/home');
    //   }}
    //   onError={()=>{console.log("login failed")}} useOneTap></GoogleLogin>
    // );

    navigate('/home');
  };

    return (
        <div>
        <nav class="navland">
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="login">
          {/* <button onClick={navigateToHome}>Login</button> */}
          <GoogleOAuthProvider class="button" clientId="109450856637-gh7250f9pmkr9j1m7pt9e7vjladkhfs8.apps.googleusercontent.com">
           <Login></Login>
         </GoogleOAuthProvider>
         </div>
      </nav>
      
      <div class="main-content">
        <div class="main-content-image"> 
            <img src="https://www.dispatchtrack.com/hubfs/saas%20logistics%20software.webp" alt="..." />
        </div>
        <div class="main-content-text">
            <div class="main-content-title"> Trimble Transport</div>
            <div>Up until now, there’s been too much “work” in the way we work. That’s why we’re taking a new approach.</div>
            <div>Now, teams can push their work forward with Trimble, knowing that it is good for the job, good for the planet, and good for the communities they serve.</div>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img class="footer-img" src={footerlogo} alt="Company Logo"/>
              <p>Transforming the way the world works.</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h3>Contact Us</h3>
              <p>Lakshmi Tech Park,<br/>5/639, Old Mahabalipuram Road,<br/> Tirumalai Nagar, Perungudi, <br/>Chennai, Tamil Nadu 600096<br/>Phone: 1800-123-8762</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h3>Follow Us</h3>
              <ul class="orderlist">
                <li><a href="https://www.facebook.com/TrimbleCorporate/">Facebook</a></li>
                <li><a href="https://twitter.com/TrimbleCorpNews">Twitter</a></li>
                <li><a href="https://www.linkedin.com/company/trimble">LinkedIn</a></li>
              </ul>
            </div>

          </div>
        </div>
    </footer>


      

      </div>

    );
}

export default Landing;