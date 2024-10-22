import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
           <h2>Blog:{blogs.length}</h2> 
        </div>
    );
};

export default Blogs;