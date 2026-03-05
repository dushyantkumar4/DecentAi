import { MyContaxt } from "../MyContaxt";
import { useContext } from "react";
import { ScaleLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useContext(MyContaxt);

  if (loading) return <ScaleLoader color="#9810fa" />;
  // if (loading) return null;
  if (!user) return  <Navigate to="/login" replace />;
  return children;
};

export default Protected;
