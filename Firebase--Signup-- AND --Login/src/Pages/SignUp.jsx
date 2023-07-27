import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);   

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={handleSignUp}>
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
        <button> Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;