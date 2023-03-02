import React, { useState } from 'react'
import axios from 'axios'
import order from 'C:\\Users\\paulsoj\\React\\transportfeb24\\src\\asserts\\order.jpg'
export function Addorder() {

    const baseURL="http://127.0.0.1:5000/assignOrder"

    const [data, setData] = useState({
        name:'',
        id:'',
        arrival_time:'',
        destination:''
    })

    function handler(e){
        const newData = { ...data}
        newData[e.target.id]=e.target.value
        setData(newData);
        console.log(data);
    }

    function submit(e){
        e.preventDefault();
        console.log("submittred")
        axios.put(baseURL,{
            name:data.name,
            arrival_time:parseInt(data.arrival_time),
            id:parseInt(data.id),
            destination:data.destination
        }).then(response =>{
            console.log(response.data.id)
            if(response.data.Message=="Error in assigning order")
                alert("Error message: "+response.data.Message);
            else    
                alert("Order Assigned To Driver Id "+response.data.id+" Successfully");

        }).catch(error => {
            console.log("Error occured: "+error)
            alert("Error occured");
    });
}


    return ( 
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                    <img src={order} alt="Driver image" width='100%'/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <form onSubmit={(e)=>{submit(e)}}>
                            <div className="card">
                                <div className="card-header trimble-color text-center">Add Order <div className="fa-solid fa-person-circle-plus"></div> </div>
                                <div className="card-body">
                                    <div className="mt-3">   
                                      <label htmlFor="id">Order Id: <span className='must'>*</span></label>
                                      <input className='form-control' type="number" onChange={(e)=>handler(e)} name="id" id="id" value={data.id} placeholder='Enter order id' required />
                                    </div> 
                                    <div className="mt-3">
                                        <label htmlFor="name">Order Name: <span className='must'>*</span></label>
                                        <input className='form-control' type="text" onChange={(e)=>handler(e)} name="name" id="name" value={data.name} placeholder='Enter order name' required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="destination">Order Destination Name: <span className='must'>*</span></label>
                                        <input className='form-control' type="text" onChange={(e)=>handler(e)} name="destination" value={data.destination} id="destination" placeholder='Enter order destination' required />
                                    </div>

                                    <div className="mt-3">   
                                      <label htmlFor="arrival_time">Estimated Time For Arrival: <span className='must'>*</span></label>
                                      <input className='form-control' type="number" onChange={(e)=>handler(e)} name="arrival_time" id="arrival_time" placeholder='Enter estimated arrival time' required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="description">Order Description Details: <span className='optional'>(optional)</span></label>
                                        <textarea className='form-control' name="description" id="description" cols="20" rows="3" placeholder='Description'></textarea>
                                    </div>
                                    <div className="my-3 d-grid gap-2">
                                            <button className='btn btn-trimble trimble-color'>Submit</button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

