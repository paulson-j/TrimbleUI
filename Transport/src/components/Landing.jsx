import React from "react";
import "C:\\Users\\paulsoj\\React\\project-demo\\src\\css\\Landing.css"
import logo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\logo.svg";
import footerlogo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg"
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";
import { Footer } from "./Footer";



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
        <nav class="nav-land">
        <div class="logo-land">
          <img class="img-land" src={logo} alt="Logo" />
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

      <Footer></Footer>


      

      </div>

    );
}

export default Landing;