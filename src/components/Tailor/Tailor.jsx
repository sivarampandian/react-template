import React from "react";
import "./Tailor.css"
import img1 from "../../assets/coat.png"
import Buttons from "../button/Button";

const Tailorpage =()=>{
    return(
        <>
           <section className="tailorpage">
           <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 coatman">
                    <img src={img1} alt="" className="img"/>
                </div>
                <div className="col-lg-6 col-md-12 tailortext">
                    <h1> THE TAILOR IS IN</h1>
                    <p>The ultimate custom menswear experience <br /> is now open in <span className="chinook">chinook center</span></p>
                    <p className="tailorline"></p>
                    <p>visit us by april 30 to be entered in a draw  <br />for a perfectly tailored wardrobe</p>
                     <Buttons />
                </div>
              </div>
          </div>
           </section>

        </>
    )
}
export default Tailorpage

