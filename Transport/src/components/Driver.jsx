import React from 'react'
import driver from "C:\\Users\\paulsoj\\React\\project-demo\\src\\asserts\\driver.jpg"
export function Driver(){
     function submit(){
            
     }
    return(
       <>
        <div className="container-fluid">
            <div className="row driver-main">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img className='img-fluid driver-img' src={driver} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="container-fluid">
                    <form action="" className='driver-form p-5 needs-validation' >
                        <label htmlFor="" className='form-label' id='name' required>Name</label>
                        <input type="text"  class="form-control" placeholder="Enter name" required/>
                        
                        <br />
                        <label htmlFor="" className='form-label' id='age'>Age</label>
                        <input type="number" class="form-control" placeholder='Enter age' required/>
                        <br />
                        <label htmlFor="" className='form-label' id='type-of-vehicle'>Type of vehicle</label>
                        <input type="text" class="form-control" placeholder='Enter type of vehicle' required/>
                        <br />
                        <label htmlFor="" className='form-label' id='eta'>ID</label>
                        <input type="number" class="form-control" placeholder='Enter driver ID'  required/>
                        <br />
                        <button class="btn btn-primary" onClick={submit}>submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
       </>

    );
}