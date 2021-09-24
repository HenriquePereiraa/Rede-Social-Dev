import React from "react";
import { Box, Container } from "@material-ui/core";
import Navbar from "../Feed/Navbar";
import PostCard from '../../components/PostCard/PostCard'


const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Lucas Ninhi",
      usename: "lucasninhi",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um App do zero utilizando react.js",
    date: "April, 17, 2021",
    description: "Qual o framework favorito de vocês",
    hashtag: "#js, #reactj, #nodejs, #developer",
    image: "/images/posts/post1.png",
  },

  {
    id: 1,
    author: {
      id: 1,
      name: "Lucas Ninhi",
      usename: "lucasninhi",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um App do zero utilizando react.js",
    date: "April, 17, 2021",
    description: "Qual o framework favorito de vocês",
    hashtag: "#js, #reactj, #nodejs, #developer",
    image: "/images/posts/post1.png",
  },
];

const Feed = () => {

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Navbar />
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Feed;
