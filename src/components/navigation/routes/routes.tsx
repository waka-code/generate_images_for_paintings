import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import Models from "../../pages/models/models";
import Prices from "../../pages/prices/Prices";
import GenerateImage from "../../pages/home/GenerateImage";
import Login from "../../useraccess/login/Login";
import Register from "../../useraccess/register/Register";
function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/GenerateImage" element={<GenerateImage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesPages;
