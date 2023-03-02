import React from 'react'
import logo from 'C:\\Users\\paulsoj\\React\\transportfeb24\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg'

export function Footer() {
    return (  
        <>
        <div className="container-fluid bg-dark text-light trimble-footer">
            <div className="row">
                <div className="col-md-3 p-5"><img src={logo} className="img-fluid" alt="Your Logo" height="40px"/></div>
                <div className="col-md-6 d-flex justify-content-center p-3">
                <p className="">Transforming the way the world works. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus impedit excepturi explicabo corrupti, molestiae ipsum, eligendi harum qui obcaecati fuga laboriosam voluptatibus amet sit alias ducimus repudiandae numquam. Voluptatem?</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center p-3">
                    <p>Follow us:</p> 
                    <ul className="list-inline">
                      <li className="list-inline-item ms-3"><a href=""><i className="text-white fab fa-facebook"></i></a></li>
                      <li className="list-inline-item"><a href=""><i className="text-white fab fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href=""><i className="text-white fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                <p>&copy; 2023 Trimble</p>
                </div>
                <div className="col-md-6">
                    <ul className="list-inline float-md-right">
                      <li className="list-inline-item"><a className='text-white' href="#">Terms of Use</a></li>
                      <li className="list-inline-item"><a className='text-white' href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>


        {/* <div className="container-fluid">
            <div className="row">
                <div className="col dark1"><img src={logo} className="img-fluid" alt="Your Logo" width="40px" height="40px"/></div>
                <div className="col dark2">
                <p className="">Transforming the way the world works. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus impedit excepturi explicabo corrupti, molestiae ipsum, eligendi harum qui obcaecati fuga laboriosam voluptatibus amet sit alias ducimus repudiandae numquam. Voluptatem?</p>
        
                </div>
                <div className="col dark3">
                <p>Follow us:</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href=""><i className="fab fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href=""><i className="fab fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href=""><i className="fab fa-instagram"></i></a></li>
          </ul>
                </div>
            </div>
            <div className="row">row2</div>
        </div> */}
        </>
    );
}
