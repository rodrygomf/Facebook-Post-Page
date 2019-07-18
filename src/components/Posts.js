import React, { Component } from "react";
import "./Posts.css";
import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Rodrigo Figueiredo",
          avatar: "../assets/avatar.png"
        },
        date: "18 Jul 2019",
        content:
          "Oi, este é um post apenas de exemplo. Post apenas de exemplo. Post apenas de exemplo. Post apenas de exemplo.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rodrigo M. F.",
              avatar: "../assets/avatar.png"
            },
            content:
              "Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo."
          },
          {
            id: 2,
            author: {
              name: "Rodrigo Martins F.",
              avatar: "../assets/avatar.png"
            },
            content: "Este é o segundo comentário de exemplo."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Rodrigo Martins",
          avatar: "../assets/avatar.png"
        },
        date: "18 Jul 2019",
        content:
          "Oi, este é um post apenas de exemplo. Post apenas de exemplo. Post apenas de exemplo. Post apenas de exemplo.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rodrigo M. F.",
              avatar: "../assets/avatar.png"
            },
            content:
              "Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo. Este comentário é apenas mais um exemplo."
          },
          {
            id: 2,
            author: {
              name: "Rodrigo Martins F.",
              avatar: "../assets/avatar.png"
            },
            content: "Este é o segundo comentário de exemplo."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div id="posts">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Posts;
