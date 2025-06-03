import { Navigate } from "react-router-dom";

// این کامپوننت برای نمایش دادن یک صفحه است
export default function RouteAuthGuard({ children, requiredRole }) {
    const authData = sessionStorage.getItem("auth");
    const user = authData ? JSON.parse(authData) : false;

    if (!user) {
        return <Navigate to="/auth" />;
    }
    
    if (user && user.role !== requiredRole) {
        return <Navigate to="/" />;
    }

    return children;
}
