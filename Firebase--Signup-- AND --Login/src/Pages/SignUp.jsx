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
      <div className="grid justify-items-center mt-20 ">
        <form onSubmit={handleSignUp} className="">
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Give Your Email"
            className="input input-bordered input-accent w-full max-w-xs "
          ></input>
          <br />
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Give Your name"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
          ></input>
          <br />
          {/* Photo Input */}
          <input
            type="text"
            name="photo"
            placeholder="Give Your Photo Link"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
          ></input>
          <br />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Give Your Password"
            className="input input-bordered input-accent w-full max-w-xs mt-5"
          ></input>
          <br />
          {/* Submit Button */}
          <button className="btn btn-outline text-black btn-warning w-[320px] mt-5">
            {" "}
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
