import React from "react";
import "../menu/Menu.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"

const Menus =()=>{
    return(
      <>
      <section className="menus pt-4 pb-4">
        <div>
        <div className="container ">
            <div className="row " >
                <div className="col-lg-4 col-md-12 menus1">
                    <img src={icon1} alt="" className="jimmy p-2" />
                    <h4 className="mt-3">COME SEE US</h4>
                    <p className="menuline mt-2"></p>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur. <br />Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit.</p>
                </div>
                <div className="col-lg-4 col-md-12 menus1">
                    <img src={icon2} alt="" className="jimmy p-2" />
                    <h4 className="mt-3">MAKE IT YOUR OWN</h4>
                    <p className="menuline mt-2"></p>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur. <br />Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit.</p>
                </div>
                <div className="col-lg-4 col-md-12 menus1">
                    <img src={icon3} alt=""  className="jimmy p-2"/>
                    <h4 className="mt-3">PERFECT THE FIT</h4>
                    <p className="menuline mt-2"></p>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur. <br />Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit.</p>
                </div>
            </div>
         </div>
        </div>

      </section>
      </>
    )
}

export default Menus

