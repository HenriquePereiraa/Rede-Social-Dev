import React from "react";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Account from "./Account";
import Notification from "./Notifications";
import WritePost from "./WritePost";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
    color: "#242424",
  },
  img: {
    maxHeight: 45,
    cursor:'pointer'
  },
  grow: {
    flexGrow: 1,
  },
  useSelection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 10,
  },
});

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <AppBar position="fixed" color="" className={classes.appBar}>
      <Toolbar>
        <img className={classes.img} src="/images/logo.png" alt="logo" onClick={handleClick}/>
        <div className={classes.grow}></div>
        <div className={classes.useSelection}>
          <WritePost />
          <Box ml={2}>
            <Notification />
          </Box>
          <Box ml={2}>
            <Account />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
