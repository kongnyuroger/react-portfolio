import React from "react";
import PostCard from "./PostCard";
import './Posts.css'
function Posts(){
    return(
        <section className="posts">
            <div className="post__hearder">
                <h3>Recent Post</h3>
                <span>view all</span>
            </div>
            <div className='posts__cards'>
                <PostCard
                hearding='Making a design systerm from scratch'
                date='12 Feb 2020'
                type='Design,Pattern'
                />
                <PostCard
                hearding='Creating pixel perfect icons in Figma'
                date='4 Sep 2022'
                type='Figma, Icon Design'
                />
            </div>
           
        </section>
    )
}

export default Posts