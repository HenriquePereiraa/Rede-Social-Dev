import React from "react";
import Homes from "../pages/Home/Home";
import { Route } from "react-router-dom";
import authService from "../service/authService";

const GuestRouter = ({element: Component, ...rest }) => {
  const isAuthenticated = authService.isAuthenticated();
  return <Route {...rest} element={isAuthenticated ? <Homes /> : Component} />;
};

export default GuestRouter;
