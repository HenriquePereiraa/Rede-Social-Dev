import React from "react";
import { makeStyles } from "@material-ui/styles";
import PostCard from "../../../components/PostCard/PostCard";

const useStyles = makeStyles({
  root: {},
});

const posts = [
    {
        id:1,
        author:{
            id:1,
            name:"Lucas Ninhi",
            usename:"lucasninhi",
            avatar:'/images/avatars/avatar_1.jpeg'
        },
        title:"Criando um App do zero utilizando react.js",
        date:"April, 17, 2021",
        description:"Qual o framework favorito de vocês",
        hashtag:"#js, #reactj, #nodejs, #developer",
        image:"/images/posts/post1.png"
    },
    
    {
        id:1,
        author:{
            id:1,
            name:"Lucas Ninhi",
            usename:"lucasninhi",
            avatar:'/images/avatars/avatar_1.jpeg'
        },
        title:"Criando um App do zero utilizando react.js",
        date:"April, 17, 2021",
        description:"Qual o framework favorito de vocês",
        hashtag:"#js, #reactj, #nodejs, #developer",
        image:"/images/posts/post1.png"
    },
];

const Feed = () => {
  const classes = useStyles();

  return (
      <div>
          {
              posts.map((post) => (
                  <PostCard key={post.id} post={post}/>
              ))
          }
      </div>
  );
};

export default Feed;
