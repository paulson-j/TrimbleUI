import React from 'react'

import {Navigationbar} from '../components/Navigationbar';
import {Footer} from '../components/Footer';
import {Driverdetails} from '../components/Driverdetails';


export function Viewdriverspage() {
    return ( 
        <>
            <Navigationbar></Navigationbar>
            <Driverdetails></Driverdetails>
            <div className="container"><hr /></div>
            <Footer></Footer>
        </>
     );
}
