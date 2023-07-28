// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   console.log(user);
//   const handleLogOut = () => {
//     logOut()
//       // eslint-disable-next-line no-unused-vars
//       .then((result) => {})
//       // eslint-disable-next-line no-unused-vars
//       .catch((err) => {});
//   };

//   return (
//     <>
//       <div className="navbar bg-base-300">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>

//           </div>
//           <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <button className="btn btn-accent">
//               <Link to="/login">Login</Link>
//             </button>

//             <button className="btn btn-accent">
//               <Link to="/signup">SignUp</Link>
//             </button>
//           </ul>
//         </div>

//         {user && (
//           <span className="ml-12">
//             <span>Email:</span> {user.email}
//              <span>Name</span> {user.displayName}
//             <div className="avatar mx-5">
//               <div className="w-20 rounded-full">
//                 <img src={user.photoURL} alt="" />
//               </div>
//             </div>

//             <button onClick={handleLogOut}  className="btn btn-neutral">LogOut</button>

//             {/* <div onClick={handleLogOut} className="navbar-end">
//               LogOut
//             </div> */}
//           </span>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
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
        <div className="navbar-start">{/* ... */}</div>
        <div className="navbar-center hidden lg:flex">
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
          <span className="ml-12">
            <p className="text-xs">
              <span>Email:</span> {user.email}
            </p>
            <p className="mt-2">
              {" "}
              {/* Add margin-top here */}
              <span>Name:</span> {user.displayName}
            </p>
            <div className="avatar mx-5">
              <div className="w-20 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>

            <button onClick={handleLogOut} className="btn btn-neutral">
              LogOut
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default Navbar;
