import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/auth_context";
const ProtectedRoute = ({ component: Component, ...props }) => {
    let { user } = useContext(AuthContext);
console.log(user?.authenticated)

  if (!user?.authenticated) {
    return <Navigate to="/login" replace="true" />;
  } else {
    return <Component  />;
  }
};
export default ProtectedRoute
