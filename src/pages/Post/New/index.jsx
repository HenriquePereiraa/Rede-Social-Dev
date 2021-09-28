import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Avatar, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import PostEditor from "./Editor";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    top: "auto",
    bottom: 0,
    alignItems: "center",
  },
  image: {
    height: "100px",
  },
  imagePreview: {
    width: "100%",
  },
  textArea: {
    width: "100%",
    height: "100%",
    resize: "none",
    border: "none",
    outline: "none",
    fontSize: 15,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const NewPost = () => {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([{ title: "node.js" }]);
  const [markdown, setMarkdown] = useState("");

  const account = useSelector((state) => state.account.user);

  return (
    <>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
          <PostEditor
            image={image}
            setImage={setImage}
            title={title}
            setTitle={setTitle}
            tags={tags}
            setTags={setTags}
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
        </Box>
        <Box width="50%" height="100%" padding={2}>
          {image && (
            <Box mb={2}>
              <img
                className={classes.imagePreview}
                src={image}
                alt="background"
              />
            </Box>
          )}
          <Box mb={2}>
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Box>
              <Avatar className={classes.avatar} src={account?.user.avatar} />
            </Box>
            <Box>
              <Typography variant="body1">{account?.user.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                10 meses atrás
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1">
            {tags.map((tag) => tag.title).join(", ")}
          </Typography>
          <Divider />
          <ReactMarkdown>{markdown}</ReactMarkdown>
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
    </>
  );
};

export default NewPost;
