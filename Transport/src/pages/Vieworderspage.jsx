import React from 'react'
import { Footer } from '../components/Footer';
import { Navigationbar } from '../components/Navigationbar';
import {Orderdetails} from '../components/Orderdetails';

export function Vieworderspage() {
    return ( 
        <>
            <Navigationbar></Navigationbar>
            <Orderdetails></Orderdetails>
            <div className="container"><hr /></div>
            <Footer></Footer>
        </>
     );
}

