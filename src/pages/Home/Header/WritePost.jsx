import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";

const WritePost = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/post/new');
  }

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Novo Post
      </Button>
    </div>
  );
};

export default WritePost;
