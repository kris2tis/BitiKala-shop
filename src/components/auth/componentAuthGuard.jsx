import { Navigate } from "react-router-dom";

export default function ComponentAuthGuard({ children, requiredRole }) {
    const authData = sessionStorage.getItem("auth");
    const user = authData ? JSON.parse(authData) : false;

    if (!user) return < Navigate to="/auth"/>

    if (user && user.role !== requiredRole) return ;
    
    
    return children;

    
}
