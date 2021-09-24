import React, { useEffect, useRef, useState } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Popover } from "@material-ui/core";
import {getNotifications} from '../../../actions/notificationsAction'
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon,
} from "react-feather";
import { makeStyles } from "@material-ui/styles";


const iconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) => ({
  icon:{
    background:theme.palette.secondary.main
  }
}))

const Notification = () => {
  const account = useSelector((state) => state.account.user);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const isAuthenticated = !!account?.user;
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();


  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {isAuthenticated && (
        <>
          <IconButton ref={ref} onClick={handleOpen}>
            <SvgIcon>
              <BellIcon />
            </SvgIcon>
          </IconButton>
          <Popover
            onClose={handleClose}
            open={isOpen}
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box p={2}>
              <Typography variant="body1" color="textPrimary">
                Notificações
              </Typography>
            </Box>
            <List>
              {notifications.map((notification) => {
                const Icon = iconsMap[notification.type];
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.icon}>
                        <SvgIcon>
                          <Icon />
                        </SvgIcon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        color: 'textPrimary',
                      }}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Popover>
        </>
      )}
    </div>
  );
};

export default Notification;
