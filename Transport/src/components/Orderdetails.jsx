import React, { useEffect, useState } from 'react'
import axios from 'axios';
export function Orderdetails() {

    const [data,setData] =useState([]);
    const [selectedDriver,setSelectedDriver]=useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const baseURL="http://localhost:5000/listOrders"
    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            console.log(response.data.List)
            setData(response.data.List)
        }).catch(error => console.log(error))
    },[])

    const handleOrderClick = (driver) => {
        console.log(driver);
        setSelectedDriver(driver);
      setIsPopupVisible(!isPopupVisible);
    }
    const handleCardClose =()=>{
        setSelectedDriver(null);
        setIsPopupVisible(!isPopupVisible);
    }

    

    

        
    return ( 
        <> 
            <div className="container text-center">
            <div className="row trimble-color rounded-3 my-3 py-3 mx-1">
                    <div className="col-3">Id</div>
                    <div className="col-3">Name</div>
                    <div className="col-3">Number of orders</div>
                    <div className="col-3">Time</div>
                    
                </div>
                
                

            {
                data.map((data)=>{
                 return (
                     <>
                        <div className="row border border-grey mb-1 py-2 mx-2" key={data.id} onClick={() => handleOrderClick(data)}>
                        <div className="col-3">{data.id}</div>
                        <div className="col-3">{data.name}</div>
                        <div className="col-3">{data.list_of_order.length}</div>
                        <div className="col-3">{data.time}</div>
                    
                </div>
                        
                     </>
                 )

                })
            }
            </div>
            {selectedDriver && (
                <div className="popup card h-75">
                    <div className="card-header text-center fs-4 trimble-color">{selectedDriver.name} Order Details<button className='fa-solid fa-close close' onClick={handleCardClose}></button></div> 
                    <div className="dropdown-center d-grid mt-2">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          View Driver Details
                        </button>
                        <ul className="dropdown-menu w-75">
                          <li className="item">Driver Id: <span className='fs-5 text-muted'>{selectedDriver.id}</span></li>
                          <li className="item">Name: <span className='fs-5 text-muted'>{selectedDriver.name}</span></li>
                          <li className="item">Number of Orders: <span className='fs-5 text-muted'>{selectedDriver.list_of_order.length}</span></li>
                          <li className="item">Time: <span className='fs-5 text-muted'>{selectedDriver.time}</span></li>
                        </ul>
                    </div>

                    <div className="card mt-2">

                        <div className="">
                            {
                                        selectedDriver.list_of_order.map((data)=>{
                                            return(
                                                <div className="dropdown-center">
                                                      <div className="border-bottom my-1 ps-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {data.id}. {data.name}
                                                      </div>
                                                      <ul className="dropdown-menu w-75" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" >Order Id: {data.id}</a></li>
                                                        <li><a className="dropdown-item" >Name: {data.name}</a></li>
                                                        <li><a className="dropdown-item" >Destination: {data.destination}</a></li>
                                                        <li><a className="dropdown-item" >Arrival Time: {data.arrival_time}</a></li>
                                                        <li><a className="dropdown-item text-wrap" >Assigned Time: {data.time}</a></li>
                                                        
                                                      </ul>
                                                    </div>
                                            )
                                        })
                                    }
                                
                        </div>

                    </div>
                    
                </div>)
            }
        
        </>
     );
}

{/* <div>Driver id: <span className='text-muted fs-5'>{selectedDriver.id}</span></div>
                    <div>Name: <span className='text-muted fs-6'>{selectedDriver.name}</span></div>
                    <div>Total orders: <span className='text-muted fs-5'>{selectedDriver.list_of_order.length}</span></div>
                    <div>Time: <span className='text-muted fs-5'>{selectedDriver.time}</span></div> */}

  
    

    
    
//         <div className="container">

//             <div className="row card-list">
            
//                 <div>
//             {selectedDriver && (
//                 <div  className="popup card">
//                     <div className="card-header text-center fs-4 trimble-color">Update Driver Details<button className='fa-solid fa-close close' onClick={handleCardClose}></button></div> 
//                     <form onSubmit={(e)=>{submit(e)}}>
//                     <div className="card m-2 p-2">
//                         <div className="mb-3">
//                        <span className=''>Driver id :<span className='text-muted fs-4'> {selectedDriver.id}</span></span>
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="name">Name: </label>
//                         <input className="form-control" type="text" onChange={(e)=>handler(e)} name="name" id="name" value={selectedDriver.name} />
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="age">Age: </label>
//                         <input className="form-control" type="number" onChange={(e)=>handler(e)} name="age" id="age" value={selectedDriver.age} />
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="type_of_vehicle">Type of Vehicle: </label>
//                         <input className="form-control" type="text" onChange={(e)=>handler(e)} name="type_of_vehicle" id="type_of_vehicle" value={selectedDriver.type_of_vehicle} />
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="ratings">Ratings<span className='optional'>(0-10)</span> : </label>
//                         <input className="form-control" type="number" onChange={(e)=>handler(e)} name="ratings" id="ratings" value={selectedDriver.ratings} />
//                         </div>
//                     </div>
//                     <div className="container"><div className="row">
//                         <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' >Submit</button></div>
//                         <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' onClick={handleCardClose}>Cancel</button></div></div></div>
                    
                    
                    
//                     </form>

                    
//                 </div>)
//             }
//                 </div>
//             </div>
     
//         </div>
        
//         </>
//      );
// }
