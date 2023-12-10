import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { authError, authLogin, authSignup } from "../Redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    errMessage: state.errMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authLogin: (email, password) => dispatch(authLogin(email, password)),
    authSignUp: (name, email, password) =>
      dispatch(authSignup(name, email, password)),
    authError: (msg) => dispatch(authError(msg)),
  };
};

const Login = ({ authLogin, authSignUp, authError, errMessage }) => {
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    setLoading(true);
    mode === "login"
      ? authLogin(data.email, data.password)
      : authSignUp(data.name, data.email, data.password);
    setTimeout(() => {
      setLoading(false);
      !errMessage && navigate("/");
      authError(null);
    }, 2000);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <Navbar />
      {errMessage && alert(errMessage)}
      {loading === true ? (
        <h1 className="text-5xl text-center mt-36">Loading...</h1>
      ) : (
        <>
          <h1 className="text-5xl text-center mt-[100px]">
            {mode === "login" ? "Login" : "Signup"}
          </h1>
          <form
            className=" mt-10 flex flex-col items-center gap-5"
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => handleChange(e)}
          >
            {mode === "signup" && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-2 border-primary p-2 rounded-md md:w-1/6"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-primary p-2 rounded-md md:w-1/6"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              minLength={6}
              className="border-2 border-primary p-2 rounded-md md:w-1/6"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="border-2 bg-primary text-white p-2 w-1/4 md:w-1/6 rounded-md cursor-pointer"
            />
            {mode === "login" ? (
              <p>
                Don't Have an Account?{" "}
                <span
                  className="text-primary underline cursor-pointer"
                  onClick={() => setMode("signup")}
                >
                  Signup
                </span>
              </p>
            ) : (
              <p>
                Already Have an Account?{" "}
                <span
                  className="text-primary underline cursor-pointer"
                  onClick={() => setMode("login")}
                >
                  Login
                </span>
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
