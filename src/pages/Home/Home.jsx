import React from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "./Header";
import { Route, Routes } from "react-router";
import Feed from "../Feed";
import NewPost from "../Post/New";


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding:24
  },
  toolBar: {
    minHeight: 64,
  },
});

const Homes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolBar}></div>
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/post/new" element={<NewPost/>} />
          <Route path="*" element={<h1>ERROR!404 </h1>}/>
        </Routes>
      </main>
    </div>
  );
};

export default Homes;
