import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const { createUser, profile } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        profile(name, photo)
          // eslint-disable-next-line no-unused-vars
          .then((result) => {})
          // eslint-disable-next-line no-unused-vars
          .catch((err) => {});
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
        {/* Name Input */}
        <input type="text" name="name" placeholder="Give Your name"></input>
        <br />
        {/* Photo Input */}
        <input
          type="text"
          name="photo"
          placeholder="Give Your Photo Link"
        ></input>
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
