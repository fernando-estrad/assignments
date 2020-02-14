import React from 'react'


function BlogPost(props){
    return(
        <div className="post">
            <h2><b>{props.post.title}</b></h2>
            <h3 style={{display: !props.post.subTitle && "none"}}>{props.post.subTitle}</h3>
            <p>Posted by {props.post.author} on {props.post.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost 