import React from "react"
import Post from "./Post"

const PostsList = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <Post
          key={post.id}
          post={post}
          openPostDetailProps={props.openPostDetailProps}
        />
      ))}
    </ul>
  )
}
export default PostsList