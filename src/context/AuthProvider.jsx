import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {

  // create a USER
    const handleCreateUser = (email, password) => {
       return createUserWithEmailAndPassword( auth, email, password);
    }

  const userInfo = {
    handleCreateUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
