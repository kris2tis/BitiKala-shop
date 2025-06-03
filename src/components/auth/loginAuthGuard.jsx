export default function loginAuthGuard() {
    const authData = sessionStorage.getItem("auth");
    const user = authData ? JSON.parse(authData) : false;
    if (!user) return false
    
    if (user && user.isLoggedIn) return true;
}
