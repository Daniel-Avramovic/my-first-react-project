import React from 'react';
import blogPosts from '../../data/blogPost.js';
import './blogList.css'

export const BlogPost = () => {
    return (
        <div className='container'>
            {blogPosts.map((post, index)=>(
                <div className='singlePost' key={index}>
                    <h3 className='m-2'>{post.title}</h3>
                    <p className='m-2'>{post.body}</p>
                </div>
            ))}
        </div>
    )
}