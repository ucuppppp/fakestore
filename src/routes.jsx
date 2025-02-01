import {BrowserRouter as Router, Routes, Route} from "react-router";
import './index.css'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx';
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import GuestRoute from "./components/GuestRoute.jsx";
import ProductPage from "./pages/product/index.jsx";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                    <Route 
                        path="/"
                        element={   <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>} />
                
                    <Route
                        path="/login"
                        element={   <GuestRoute>
                                        <Login />
                                    </GuestRoute>} />
                <Route
                        path="/product/:idProduct"
                        element={   <ProtectedRoute>
                                        <ProductPage />
                                    </ProtectedRoute>} />

            </Routes>
        </Router>
    )
}

export default AppRoutes