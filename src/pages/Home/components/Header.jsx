import React from "react";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import  SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from "react-feather";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
    color:'#242424'
  },
  img: {
    maxHeight: 45,
  },
  grow:{
    flexGrow:1,
  },
  useSelection:{
    display:"flex",
    alignItems:"center"
  },
  button:{
    marginRight:10,
  },
  bell:{
    marginRight:10
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="" className={classes.appBar}>
      <Toolbar>
        <img className={classes.img} src="/images/logo.png" alt="logo" />
        <div className={classes.grow}></div>
        <div className={classes.useSelection}>
          <Button className={classes.button} color="primary" variant="contained">
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell/>
          </SvgIcon>
          <Avatar alt="Henry Sharp" src="/" />
        </div>

        {/* <div className="left">
          <a href="/">Conecta Dev</a>
          <input type="text" name="" id="" />
        </div>
        <div className="right">
         
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
