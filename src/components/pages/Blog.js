import React from "react";
import BlogCard from "../BlogCard";
import './PageTitle.css'
import Footer from "../Footer";

function Block (){
    return(
      <>
        <section>
          <h1 className='page-title'>Blog</h1>
          <BlogCard
          title='UI Interactions of the week'
          year='2019'
          type='Express, Handlebars'
          />
          <BlogCard
          title='UI Interactions of the week'
          year='2019'
          type='Express, Handlebars'
          />
          <BlogCard
          title='UI Interactions of the week'
          year='2019'
          type='Express, Handlebars'
          />
          <BlogCard
          title='UI Interactions of the week'
          year='2019'
          type='Express, Handlebars'
          />
        </section>
        <Footer/>
     </>
    )
}

export default Block