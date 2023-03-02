import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios';
export function Driverdetails() {
    
    const baseURL="http://localhost:5000/listDrivers"

    const [data,setData] = useState([]);
    const updateURL="http://127.0.0.1:5000/updateDriver"
    const deleteURL="http://localhost:5000/deleteDriver"

    const [updateData, setUpdateData] = useState({
        name:'',
        id:'',
        type_of_vehicle:'',
        age:'',
        ratings:''

    })

    function handler(e){
        const newData = { ...updateData}
        newData[e.target.id]=e.target.value
        setUpdateData(newData);
        setSelectedDriver(newData)
        console.log(updateData);
    }

    function submit(e){
        e.preventDefault();
        console.log("submittred",updateData)
        axios.put(updateURL,{
            name:updateData.name,
            age:parseInt(updateData.age),
            id:parseInt(updateData.id),
            type_of_vehicle:updateData.type_of_vehicle,
            ratings:parseInt(updateData.ratings),
        }).then(response =>{
            console.log(response.data.id)
            if(response.data.Message=="Error in assigning order")
                alert("Error message: "+response.data.Message);
            else    
                alert("Successfully updated Driver Id "+response.data.id);
                handleCardClose();
                

        }).catch(error => {
            console.log("Error occured: "+error)
            alert("Error occured");
    });
}


    useEffect(() => {
        console.log("useeffect")
        axios.get(baseURL).then((response) => {
            setData(response.data.List);
          }).catch(error => {console.log("error n reterving data")});
      },[updateData]);

      
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);


    const handleOrderClick = (driver) => {
      setSelectedDriver(driver);
      setUpdateData(driver);
      setIsPopupVisible(!isPopupVisible);
    };

    const handleCardClose = () => {
        setSelectedDriver(null);
        setUpdateData(null);
        setIsPopupVisible(!isPopupVisible);
    };

    const handleDeleteClick= (driver) => {
        alert("Do you want to delete? ")
        setUpdateData(driver)
        axios.delete(deleteURL+"/"+driver.id)
        .then((response) => {
            console.log("deleted driver ....")
            console.log("Driver ID: ",driver.id)
            setUpdateData(null)
        }).catch(error => {console.log("Error",error)})
        
        
    }

    
    
    return ( 
        <>

        <div className="container">

            <div className="row card-list">
            {
                data.map(data => {
                   console.log("render",data);
                   return (

                       <div className="col-md-3 my-3" key={data.id}>
                           <div className="card">
                               <div className="card-header fs-5 trimble-color text-center">{data.name} <i onClick={() => handleOrderClick(data)} className="fa-solid fa-pencil"></i><i onClick={() => handleDeleteClick(data)} className="fa-solid fa-trash text-danger position-absolute end-0 me-3 mt-1"></i></div>
                               <div className="card m-2 p-2">
                                   <div className='key'>Id: <span className='value'>{data.id}</span></div>
                                   <div className='key'>Age: <span className='value'>{data.age}</span></div>
                                   <div className='key'>Type Of Vehicle: <span className='value'>{data.type_of_vehicle}</span></div>
                                   <div className='key'>Ratings: <span className='value'>{data.ratings}</span></div>
                                   <div className='key'>Time To Finish Allotted Orders: <span className='value'>{data.time} <span className='text-muted'>(In Hours)</span></span></div>

                               </div>
                           </div>
                       </div>);})
            }
                <div>
            {selectedDriver && (
                <div  className="popup card">
                    <div className="card-header text-center fs-4 trimble-color">Update Driver Details<button className='fa-solid fa-close close' onClick={handleCardClose}></button></div> 
                    <form onSubmit={(e)=>{submit(e)}}>
                    <div className="card m-2 p-2">
                        <div className="mb-3">
                       <span className=''>Driver id :<span className='text-muted fs-4'> {selectedDriver.id}</span></span>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="name">Name: </label>
                        <input className="form-control" type="text" onChange={(e)=>handler(e)} name="name" id="name" value={selectedDriver.name} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="age">Age: </label>
                        <input className="form-control" type="number" onChange={(e)=>handler(e)} name="age" id="age" value={selectedDriver.age} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="type_of_vehicle">Type of Vehicle: </label>
                        <input className="form-control" type="text" onChange={(e)=>handler(e)} name="type_of_vehicle" id="type_of_vehicle" value={selectedDriver.type_of_vehicle} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="ratings">Ratings<span className='optional'>(0-10)</span> : </label>
                        <input className="form-control" type="number" onChange={(e)=>handler(e)} name="ratings" id="ratings" value={selectedDriver.ratings} />
                        </div>
                    </div>
                    <div className="container"><div className="row">
                        <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' >Submit</button></div>
                        <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' onClick={handleCardClose}>Cancel</button></div></div></div>
                    
                    
                    
                    </form>

                    
                </div>)
            }
                </div>
            </div>
     
        </div>
        
        </>
     );
}
