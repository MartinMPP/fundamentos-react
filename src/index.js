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
        title="Título da notícia 01"
        subtitle="subtítulo da notícia 01"
      />
      <Post
        title="Título da notícia 02"
        subtitle="subtítulo da notícia 02"
      />
      <Post
        title="Título da notícia 03"
        subtitle="subtítulo da notícia 03"
      />
      <Post
        title="Título da notícia 04"
        subtitle="subtítulo da notícia 04"
      />
    </>
  )
}
