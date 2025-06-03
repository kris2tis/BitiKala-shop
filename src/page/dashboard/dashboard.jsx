import { useEffect, useState } from "react";
import ComponentAuthGuard from "../../components/auth/componentAuthGuard";
import UserDashboradDetails from "./UserDashboradDetails";
import AdminPanel from "../AdminPanel/AdminPanel";

export default function Dashboard() {
    let [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        const getUserLoggedIn = JSON.parse(sessionStorage.getItem("auth")) || false;
       
        setUserDatas(getUserLoggedIn && getUserLoggedIn);
    }, []);
    return (
        <div className="px-5 w-full">
            <ComponentAuthGuard requiredRole="admin">
                پنل ادمین
                <UserDashboradDetails userName={userDatas.realName} />
                <AdminPanel />
            </ComponentAuthGuard>
            <ComponentAuthGuard requiredRole="user">
                پنل کاربری
                <UserDashboradDetails userName={userDatas.realName} />
            </ComponentAuthGuard>
        </div>
    );
}
