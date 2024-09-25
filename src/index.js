import React from "react";
import ReactDOM from "react-dom"
import Post from "./Post";




ReactDOM.render(
  <Appz />,
  document.getElementById('root')
)

function Appz() {

  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post
        post={{
          title: 'Titulo da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />
      <Post
        post={{
          title: 'Titulo da notícia 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />
      <Post
        post={{
          title: 'Titulo da notícia 03',
          subtitle: 'Subtítulo da notícia 03'
        }}
      />
    </>


  )
}
