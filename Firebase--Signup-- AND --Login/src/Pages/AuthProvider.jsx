import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LogIn
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Logout
  const logOut = () => {
    return signOut(auth);
  };

  const profile=(name,photo) => {
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL :photo
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  });

  // Auth Info
  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    profile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
