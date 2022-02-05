import { useAuth } from "./../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate replace to="/" />;
  } else {
    return children;
  }
};

export default AuthRoute;
