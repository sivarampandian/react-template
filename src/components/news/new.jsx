import React from "react";
import "../news/new.css"
import Buttons from "../button/Button";

const News =()=>{
    return(
        <section className="news">
               <div className="newcy pt-4  pb-4">
                    <h5>INDOCHINO IN THE NEWS</h5>
                    <h2 className="mt-4">"indochino: The it's-Too-Good-To-Be- <br /> True-That's-Actually-True-Custom Suit "</h2>
                    <p className="mt-3">-Forbes</p>
                    <Buttons/>

               </div>
        </section>
    )
}

export default News