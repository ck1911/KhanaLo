import { Routes, Route } from "react-router-dom";

import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignIn/SignIn";
import Logout from "../Components/Logout/Logout";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";
import History from "../Components/History/History";
import ProtectedRoute from "./ProtectedRoute";


export default function RouteConfiguration() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<Details />} />
        <Route path="/history" element={<ProtectedRoute component={History} />} />

        {/* <Route
          path="/add"
          element={<ProtectedRoute component={AddProduct} />}
        /> */}
      </Routes>
    </>
  );
}
