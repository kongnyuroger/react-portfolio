import React from "react";
import WorkCard from "../WorkCard";
import Footer from "../Footer";
import './PageTitle.css'


function Work () {
    return(
        <>
        <section className="works">
            <h1 className='page-title'>Works</h1>
            <WorkCard
            image={require('../../images/img2.png')}
            title='Designing Dashboards'
            year='2022'
            type='Dashboard'
             />
             <WorkCard
            image={require('../../images/img3.png')}
            title='Vibrant Portraits of 2020'
            year='2020'
            type='Illustration'
            />
            <WorkCard
            image={require('../../images/img4.png')}
            title='36 Days of Malayalam type'
            year='2018'
            type='Typography'
            />
            <WorkCard
            image={require('../../images/img5.png')}
            title='Components'
            year='2018'
            type='Components, Design'
            />
            
        </section>
        <Footer/>
        </>
        
    )
}

export default Work