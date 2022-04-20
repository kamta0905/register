import { Route, Router, Routes } from "react-router-dom";

// helpers
import { RequireAuth } from "../context/authContext";

// pages
import Home from "../pages/home/Home";
import Login from "../pages/auth//Login";
import Register from "../pages/auth/Register";
import DogRegister from "../pages/auth/DogRegister";
import Setting from "../pages/setting/Setting";
import PrivateRoute from "./PrivateRoute";

export default () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/setting" element={<Setting />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/register/dog" element={<DogRegister />} />
    </Routes>
  );
};
