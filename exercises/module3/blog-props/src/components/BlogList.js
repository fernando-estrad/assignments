import React from 'react'
import blogData from '../blogData'
import BlogPost from './BlogPost'

function BlogList(){
    const blogPostProps = blogData.map(post => <BlogPost post={post}/>)
    return(
        <div className="blog-list">
            {blogPostProps}
            <hr/>
        </div>
    )
}

export default BlogList 