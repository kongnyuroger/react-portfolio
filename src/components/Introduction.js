import React from "react";
import './Introduction.css'

function Introduction () {
    return(
        <section className="introduction">
            <div className='introduction__text-box'>
                <h1 className='introduction__text-box__title'>Hi, I am John,<br/>
                    Creative Technologist
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button>Download Resumer</button>
            </div>
            <div className="introduction__img-box">
                <img src={require('../images/img1.png')}/>
            </div>


        </section>
    )
}

export default Introduction