import React from "react";
import "../images/images.css"
import img1 from "../../assets/couple1.png"
import img2 from "../../assets/couple2.png"
import img3 from "../../assets/couple3.png"
import img4 from "../../assets/couple4.png"
import img5 from "../../assets/couple5.png"

const Images =()=>{
    return(


<section className="imagy">
<h2 className="mt-4">#INDOCHINO</h2>
<div className="imageflex mt-5 pb-5">
    <div  className="imageflex1">
       <img src={img1} alt=""  className="image"/>
       <img src={img2} alt=""  className="image"/>
       <img src={img3} alt=""  className="image"/>
       <img src={img4} alt=""  className="image"/>
       <img src={img5} alt=""  className="image"/>
    </div>
    <div className="imageflex2">
    <img src={img1} alt=""className="image" />
       <img src={img2} alt=""  className="image"/>
       <img src={img3} alt=""  className="image"/>
       <img src={img4} alt=""  className="image"/>
       <img src={img5} alt=""  className="image"/>
    </div>
</div>
</section>
         
    )
}

export default Images