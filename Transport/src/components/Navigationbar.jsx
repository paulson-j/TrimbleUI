import React, { useEffect, useState } from 'react'
import logo from 'C:\\Users\\paulsoj\\React\\transportfeb24\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export function Navigationbar() {
  const [credential,setCredential] = useState();
  const navigate = useNavigate()


  useEffect(()=>{

    const storedCredentials = localStorage.getItem('user');
 
    if(storedCredentials){
      setCredential(storedCredentials);
    }else{
        navigate('/')
        return;
    }
    let webToken = storedCredentials.substring(storedCredentials.indexOf(':')+1,storedCredentials.indexOf(','));

    console.log(webToken);
    var decoded = jwt_decode(webToken);
    setCredential(decoded['picture']);
    console.log(credential)
  },[])

  const logout = () =>{
    localStorage.removeItem('user');
  }


    return ( 
        
        <>
        <nav className='navbar navbar-expand-lg fs-5 trimble-color'>
            <div className="container">
            <a href="" className='navbar-brand'>
            <img src={logo} alt="" width="120px" height="60px" className="d-inline-block align-text-top"/>
     
            </a>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            

            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav ms-auto">
                <li className='nav-item '>
                        <a href="/" className='nav-link p-2 m-1'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/about" className='nav-link p-2 m-1'>About</a>
                    </li>
                    <li className="nav-item dropdown">
          <a className="nav-link p-2 m-1 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/driver">Driver</a></li>
            <li><a className="dropdown-item" href="/assignorder">Assign Order</a></li>
            <li><a className="dropdown-item" href="/viewdrivers">View Drivers</a></li>
            <li><a className="dropdown-item" href="/vieworders">View Orders List</a></li>
            
          </ul>
        </li>
        <li className='nav-item '>
        <img className='profile-img m-2' src={credential} alt="Image" /> 
                    </li>
        <li className='nav-item '>
                        <a href="/" onClick={logout} className='nav-link p-2 m-1'>Logout</a>
                    </li>
                </ul>
                {/* <ul className='navbar-nav'><img className='profile-img m-2' src={credential} alt="Image" /> 
                <li className='nav-item'>
                        <a href="" className='nav-link p-2 m-1'>Logout</a>
                    </li>
                </ul> */}
            </div>
            </div>
        </nav>
        


        {/* <nav class="navbar navbar-expand-md navbar-inverse fixed-nav-light dark3">
            <div className="container-fluid">
                <div class="navbar-header">
                     <a class="navbar-brand" href="#">
                         <img src={logo} alt="Logo" width="120px" height='25px' />
                     </a>
                </div>
                <div className="d-flex">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Driver</a></li>
              <li><a class="dropdown-item" href="#">Order</a></li>
              <li><a class="dropdown-item" href="#">Assigned Orders</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">Logout</a>
          </li>
        </ul>
        </div>
                </div>
                
            </div>
        </nav> */}
        {/* <nav class="navbar navbar-expand-md navbar-dark trimble-color" aria-label="Fourth navbar example">
    <div class="container-fluid">
        <div className="row ">
            <div className="col">
            <a class="navbar-brand" href="#">
        <img src={logo} alt="" width="120px" heigth="60px" />
      </a>
            </div>
            <div className="col d-flex align-items-end">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    
            </div>
        </div>
      
      </div>
  </nav> */}

        </>
     );
}
