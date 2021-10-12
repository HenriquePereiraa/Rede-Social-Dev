import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PostEditor from "./Editor";
import PostPreview from "./Preview";
import { PostProvider } from "../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    top: "auto",
    bottom: 0,
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const NewPost = () => {
  const classes = useStyles();

  return (
    <PostProvider>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
          <PostEditor/>
        </Box>
        <Box width="50%" height="100%" padding={2}>
          <PostPreview/>
        </Box>
      </Box>
      <AppBar position="fixed" color="inherit" className={classes.AppBar}>
        <Toolbar>
          <Button className={classes.button}>Salvar rascunho</Button>
          <Button color="secondary" variant="outlined">
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
    </PostProvider>
  );
};

export default NewPost;