import React,{useState} from 'react'
import driver from 'C:\\Users\\paulsoj\\React\\transportfeb24\\src\\asserts\\driver.jpg'

import axios from 'axios'


export function Adddriver() {

    const baseURL="http://127.0.0.1:5000/addDriver"

    const [data, setData] = useState({
        name:'',
        id:'',
        age:'',
        type_of_vehicle:''
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
        axios.post(baseURL,{
            name:data.name,
            age:parseInt(data.age),
            id:parseInt(data.id),
            type_of_vehicle:data.type_of_vehicle
        }).then(response =>{
            console.log(response.data)
            if(response.data.Message=="ID Already exist")
                alert("Error message: "+response.data.Message);
            else    
                alert("Driver Added Successfully")
            setData({
                name:'',
                id:'',
                age:'',
                type_of_vehicle:''
            }) 

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
                        <img src={driver} alt="Driver image" width='100%'/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <form onSubmit={(e)=>{submit(e)}}>
                            <div className="card">
                                <div className="card-header trimble-color text-center">Add Driver <div className="fa-solid fa-user-plus"></div></div>
                                <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="id">Enter Driver id <span className='must'> *</span></label>
                                    <input type="number" onChange={(e)=>handler(e)}  className='form-control' name="id" id="id" value={data.id}  placeholder='Enter Driver Id' required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Driver Full Name: <span className='must'> *</span></label>
                                        <input type="text" onChange={(e)=>handler(e)}  className='form-control' name='name' id='name' value={data.name} placeholder='Enter driver full name' required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="gender">Gender <span className='optional'>(Optional)</span>:</label>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" className='ms-2' name="gender" id="male" />Male
                                            <input type="radio" className='ms-2' name="gender" id="female" />Female
                                            <input type="radio" className='ms-2' name="gender" id="others" />Others
                                            
                                        </div>
                                        
                                    
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="age">Driver Age: <span className='must'> *</span></label>
                                        <input type="number" onChange={(e)=>handler(e)}  className='form-control' name='age' id='age' value={data.age} placeholder='Enter driver age' required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="type-of-vehicle">Driver Preffered vehicle type: <span className='must'> *</span></label>
                                        <input type="text" onChange={(e)=>handler(e)} className='form-control' name='type_of_vehicle' id='type_of_vehicle' value={data.type_of_vehicle} placeholder='Enter driver preferred vehicle type' required />
                                    </div>
                                    <div className="mb-3 d-grid gap-2">
                                        <button type="submit" className='btn btn-trimble trimble-color'>Submit</button>
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
