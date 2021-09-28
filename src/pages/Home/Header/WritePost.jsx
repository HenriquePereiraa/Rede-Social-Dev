import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const WritePost = () => {

  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const navigate = useNavigate();
  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/post/new");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Novo Post
      </Button>
    </div>
  );
};

export default WritePost;
