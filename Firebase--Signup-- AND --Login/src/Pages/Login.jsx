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
      <div className="grid justify-items-center mt-20 ">
        <form onSubmit={handleLogIn}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Give Your Email"
            className="input input-bordered input-primary w-full max-w-xs"
          ></input>
          <br />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Give Your Password"
            className="input input-bordered input-primary w-full max-w-xs mt-5"
          ></input>
          <br />
          {/* Submit Button */}
          <button className="btn btn-outline text-black btn-black w-[320px] mt-5">
            {" "}
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
