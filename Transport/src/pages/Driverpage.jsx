import React from 'react'
import { Adddriver } from '../components/Adddriver';
import {Navigationbar} from '../components/Navigationbar';
import {Footer} from '../components/Footer';

export function Driverpage() {
    return ( 
        <>
            <Navigationbar></Navigationbar>
            <Adddriver></Adddriver>
            <div className="container"><hr /></div>
            <Footer></Footer>
        </>
     );
}

