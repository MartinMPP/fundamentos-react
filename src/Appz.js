import React, {useState} from "react"
import Post from "./Post";
import Header from "./Header";

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Sub#02', likes: 100 },
  { title: 'Title#03', subtitle: 'Sub#03', likes: 50 }
]

export default function Appz() {

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>
      <hr /> 

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>


  )
}


