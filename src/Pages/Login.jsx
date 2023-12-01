import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const Login = () => {
  const [mode, setMode] = useState("login");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default Login;
