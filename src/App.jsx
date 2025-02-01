import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppRoutes from "./routes";
import './index.css'

export default function App() {
  
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return <AppRoutes />;
}
