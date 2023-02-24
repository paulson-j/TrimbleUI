import React from "react";
import logo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\logo.svg"

export function Footer(){
    return(
    <>
  <footer class="dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 dark">
          <img src={logo} class="img-fluid" alt="Your Logo" height="40px"/>
        </div>
        <div class="col-sm-6 dark">
          <p class="">Transforming the way the world works. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus impedit excepturi explicabo corrupti, molestiae ipsum, eligendi harum qui obcaecati fuga laboriosam voluptatibus amet sit alias ducimus repudiandae numquam. Voluptatem?</p>
        </div>
        <div class="col-sm-3 dark">
          <p>Follow us:</p>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-sm-6">
          <p>&copy; 2023 Your Company</p>
        </div>
        <div class="col-sm-6">
          <ul class="list-inline float-md-right">
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </>
    );
}