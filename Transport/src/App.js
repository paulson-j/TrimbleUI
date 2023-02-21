import {Home} from './components/Home'
import './App.css';
import Landing from './components/Landing';
import {Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
 
  return (
    <div className="App">
      

    <Routes>
    <Route path='/' element={<Landing></Landing>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    </Routes>


    </div>
  );
}

export default App;
