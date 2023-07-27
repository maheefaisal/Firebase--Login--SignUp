import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={handleLogIn}>
        {/* Email Input */}
        <input type="email" name="email" placeholder="Give Your Email"></input>
        <br />
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Give Your Password"
        ></input>
        <br />
        {/* Submit Button */}
        <button> Login</button>
      </form>
    </>
  );
};

export default Login;
