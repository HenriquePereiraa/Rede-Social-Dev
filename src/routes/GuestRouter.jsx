import React from "react";
import Homes from "../pages/Home/Home";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRouter = ({element: Component, ...rest }) => {
  const account = useSelector((state) => state.account.user);
  const isAuthenticated = Boolean(account.user);
  return <Route {...rest} element={isAuthenticated ? <Homes /> : Component} />;
};

export default GuestRouter;
