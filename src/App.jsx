import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import SingleHotel from "./Pages/SingleHotel";
import Login from "./Pages/Login";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => setToken(JSON.parse(localStorage.getItem("token"))), [token]);
  console.log(token);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route element={token ? <Outlet /> : <Navigate to="/login" />}>
          <Route path="/hotel/:id" element={<SingleHotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
