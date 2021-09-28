import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles((theme) => ({
    image: {
      height: "100px",
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
  }));

const PostEditor = ({image, setImage, tags, setTags, title, setTitle, markdown, setMarkdown}) => {
  const classes = useStyles();

  const hashTags = [
    { title: "react.js" },
    { title: "node.js" },
    { title: "Java" },
    { title: "JavaScript" },
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
    };
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  const handleTagsChance = (event, values) => {
    setTags(values);
  };
  return (
    <>
      <Box {...getRootProps()} mb={2}>
        <input {...getInputProps()} />
        <Button>Carregar imagem</Button>
      </Box>
      {image && (
        <Box mb={2}>
          <img className={classes.image} src={image} alt="background" />
        </Box>
      )}
      <Box mb={2}>
        <TextField
          id="titulo"
          placeholder="Titulo"
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Box>
      <Box mb={2}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={hashTags}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={handleTagsChance}
          renderInput={(params) => (
            <TextField {...params} variant="standard" placeholder="Tags" />
          )}
        />
      </Box>
      <textarea
        className={classes.textArea}
        value={markdown}
        onChange={(event) => setMarkdown(event.target.value)}
      ></textarea>
    </>
  );
};

export default PostEditor;
