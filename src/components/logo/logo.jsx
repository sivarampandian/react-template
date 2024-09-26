import React from "react";
import "../logo/logo.css"
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Logo =()=>{
    return(
        <>

<section>
    <div className="mainlogo pt-4 pb-5">

    <div className="icons">
        <IoLogoFacebook className="icon"/>


        <FaTwitter className="icon"/>
        <FaInstagram className="icon"/>
        

        </div>
            
            <p className="logopara mt-4">Copyright 2006-2017 indochino inc .All rights reserved</p>
            <a href="#">See contest terms and conditions</a>
        

    </div>
</section>
        </>

    )
}


export default Logo