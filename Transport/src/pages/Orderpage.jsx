import React from 'react'

import {Addorder} from '../components/Addorder'
import {Navigationbar} from '../components/Navigationbar';
import {Footer} from '../components/Footer';

export function Orderpage() {
    return ( <>
        <Navigationbar></Navigationbar>
        <Addorder></Addorder>
        <div className="container"><hr /></div>
        <Footer></Footer>
    </> );
}
