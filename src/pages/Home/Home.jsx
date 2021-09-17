import React from "react";
import Header from "./components/Header";
// import "./Home.css";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { Box, Container } from "@material-ui/core";

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
        <Container maxWidth="lg">
          <Box display="flex">
            <Navbar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Homes;
