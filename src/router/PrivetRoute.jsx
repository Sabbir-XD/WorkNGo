import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/Login" replace={true} />;
  }

  return children;
};

export default PrivetRoute;
