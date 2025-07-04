import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a USER
  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login to a user
  const handleLoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // Sign out function
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Successfully signed out!");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        toast.error("Error signing out:", error);
      });
  };

  //update profile

  const handleUpdateProfile = async (profileData) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, profileData);
      setUser({ ...user, ...profileData });
      return true;
    } catch (error) {
      toast.error("Profile update error:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    handleCreateUser,
    handleLoginUser,
    handleGoogleLogin,
    user,
    setUser,
    handleSignOut,
    loading,
    setLoading,
    handleUpdateProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
