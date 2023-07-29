import { useContext } from "react";
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
      <div className="navbar bg-base-300">
        <div className="navbar-start flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1">
            <button className="btn btn-accent">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-accent">
              <Link to="/signup">SignUp</Link>
            </button>
          </ul>
        </div>

   

        {user && (
          <span className="ml-auto flex items-center space-x-4">
            <div className="flex flex-col">
              <p className="text-xs">
                <span className="font-bold">Email:</span> {user.email}
              </p>
              <p className="mt-2">
                <span className="font-bold">Name:</span> {user.displayName}
              </p>
            </div>

            <div className="avatar mx-5">
              <div className="w-20 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>

            <button className="btn btn-neutral" onClick={handleLogOut}>
              LogOut
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default Navbar;
