import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import MessageIcon from '@material-ui/icons/Message';
import IconButton  from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root:{
        marginBottom:16,
    },
    subheader:{
        display:'flex',
        alignItems:'center'
    },
    caption:{
        marginRight:8,
    },
    message:{
        height:'auto',
        marginBottom:16,
        padding:'0 24px',
    },
    image:{
        height:300,
        width:'100%',
        maxWidth:'100%'
    },
    content:{
        padding:0
    },
    favorite:{
        marginLeft:'auto'
    }
})

const Post = ({post}) => {

    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar}/>}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography className={classes.caption} variant="caption">
                            {'Avaliado por'}
                        </Typography>
                        <Typography className={classes.caption} variant="subtitle2">
                            {post.author.name}
                        </Typography>
                        <Typography className={classes.caption} variant="caption">
                            {post.date}
                        </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography className={classes.message} variant="body1">{post.hashtag}</Typography>

                <CardActionArea>
                    <img className={classes.image} src={post.image} alt={post.title} />
                </CardActionArea>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon/>
                    <Typography
                        style={{cursor:'pointer'}}
                        color="secondary"
                        variant="body2"
                    >
                        {'10'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="comment">
                    <MessageIcon/>
                    <Typography
                        className={classes.reactions}
                        color="textsecondary"
                        variant="body2"
                    >
                        {'30'}
                    </Typography>
                </IconButton>

                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon/>
                </IconButton>
            </CardActions>
        </Card>
     );
}
 
export default Post;