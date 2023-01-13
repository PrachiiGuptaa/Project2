import React from "react";
import HomeStyle from './Home.module.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
// import  "./Navbar.css";


function Home(){
    const [set,setShow] = useState(true)
    return(

        <>
        <Navbar />
        <div className={HomeStyle.mango}>
            <div>
            
            <p className={HomeStyle.pr}>
             There is nothing impossible for those who will try.
            </p>
            {set ? 
            <button onClick={()=> setShow(false)} className={HomeStyle.abc}>JOIN WITH US</button> :
            
            <div className={HomeStyle.btn1}>
                <Link to='/joinus'><button className={HomeStyle.abd} >Register</button></Link>
                <Link to='/joinwithus'><button className={HomeStyle.abd}>LogIn</button></Link>
            </div>
                  }    
            {/* <button type="button" className="btn btn-danger HomeStyle.abc">Join With Us</button> */}
            </div>

        </div>

        </>
    )
}
export default Home