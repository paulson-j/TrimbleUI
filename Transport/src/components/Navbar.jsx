import React from "react";
import logo from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\logo.svg";

export function Navbar(){
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
          <button>logout</button>
        </div>
      </nav>
       
    );
}