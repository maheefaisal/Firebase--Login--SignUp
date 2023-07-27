import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {});
  };


  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
      {user && (
        <span>
          <p>{user.email}</p>
          <button onClick={handleLogOut}>LogOut</button>
        </span>
      )}
    </>
  );
};

export default Navbar;
