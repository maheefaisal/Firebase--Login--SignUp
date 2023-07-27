import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </>
  );
};

export default Navbar;
