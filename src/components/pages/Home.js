import React from "react"
import Footer from "../Footer"
import Introduction from "../Introduction"
import Posts from "../Posts"
import Projects from "../Projects"

function Home (){
    return(
        <>
            <Introduction></Introduction>
             <Posts/>
             <Projects/>
             <Footer/>
        </>
    )
}

export default Home