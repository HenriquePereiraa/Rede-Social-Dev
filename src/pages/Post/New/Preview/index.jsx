import React, {useContext} from 'react';
import { Avatar, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { PostContext } from '../../../../context/PostContext';
const useStyles = makeStyles((theme) => ({
    imagePreview: {
      width: "100%",
    },
    avatar: {
      marginRight: theme.spacing(1),
    },
  }));

const PostPreview = () => {

  const ctx = useContext(PostContext);
  const {image, tags, title, markdown} = ctx;

    const classes = useStyles();
    const account = useSelector((state) => state.account.user);

    return ( 
        <>
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
            {tags?.map((tag) => tag.title).join(", ")}
          </Typography>
          <Divider />
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </>
     );
}
 
export default PostPreview;