import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleHotel from "./Pages/SingleHotel";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotel/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
