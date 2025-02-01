import { Navigate } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute({ children }) {
  const {isAuthenticated} = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
}
    