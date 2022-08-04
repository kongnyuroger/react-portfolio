import React from 'react'
import WorkCard from './WorkCard'
import './Projects.css'
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className='projects'>
    <h3>Featured works</h3>
    <Link to="work" className='active-work-card'>
    <WorkCard
    image={require('../images/img2.png')}
    title='Designing Dashboards'
    year='2022'
    type='Dashboard'
    />
    </Link>
    <WorkCard
    image={require('../images/img3.png')}
    title='Vibrant Portraits of 2020'
    year='2020'
    type='Illustration'
    />
    <WorkCard
    image={require('../images/img4.png')}
    title='36 Days of Malayalam type'
    year='2018'
    type='Typography'
    />
    </section>
  )
}

export default Projects