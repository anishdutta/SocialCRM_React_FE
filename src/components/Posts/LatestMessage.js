import React from 'react'
import linkedin from '../assets/linkedin.png'

const LatestMessage = () => {
    return (
        <div className="d-flex flex-column">
            <div className=" d-flex align-items-center justify-content-between">
                <div className="d-flex my-2">
                    <img src={linkedin} alt="pic" style={{height:"4em"}} className="rounded-circle" />
                    <div className="mx-3">
                        <h5 className="">Sender's Name</h5>
                        <p className="">Latest Message asjdkjj</p>
                    </div>      
                </div>
                <div className="bg-warning rounded-circle" style={{width:"2.5em"}}>
                   <h3 className="text-white text-center">4</h3>
                </div>
            </div> 
            {/* repeated code */}
            <div className=" d-flex align-items-center justify-content-between">
                <div className="d-flex my-2">
                    <img src={linkedin} alt="pic" style={{height:"4em"}} className="rounded-circle" />
                    <div className="mx-3">
                        <h5 className="">Sender's Name</h5>
                        <p className="">Latest Message asjdkjj</p>
                    </div>      
                </div>
                <div className="bg-warning rounded-circle" style={{width:"2.5em"}}>
                   <h3 className="text-white text-center">4</h3>
                </div>
            </div> 
            <div className=" d-flex align-items-center justify-content-between">
                <div className="d-flex my-2">
                    <img src={linkedin} alt="pic" style={{height:"4em"}} className="rounded-circle" />
                    <div className="mx-3">
                        <h5 className="">Sender's Name</h5>
                        <p className="">Latest Message asjdkjj</p>
                    </div>      
                </div>
                <div className="bg-warning rounded-circle" style={{width:"2.5em"}}>
                   <h3 className="text-white text-center">4</h3>
                </div>
            </div> 
        </div>
    )
}

export default LatestMessage
