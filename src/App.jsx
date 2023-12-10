import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleHotel from "./Pages/SingleHotel";
import Login from "./Pages/Login";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { connect } from "react-redux";
import { useEffect } from "react";
import { authSuccess } from "./Redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: (username, token) => dispatch(authSuccess(username, token)),
  };
};

const App = ({ authSuccess }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    authSuccess(
      localStorage.getItem("username"),
      localStorage.getItem("token")
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route element={token ? <Outlet /> : <Navigate to="/login" />}>
          <Route path="/hotel/:id" element={<SingleHotel />} />
        </Route>
        <Route path="/home" element={<Home />} />

        <Route
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
      </Routes>
    </>
  );
};

export default connect(null, mapDispatchToProps)(App);
