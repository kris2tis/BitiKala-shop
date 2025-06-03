import { useRoutes } from "react-router-dom";

import Layout from "./layout/MainLayout";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import ProductDetails from "./page/product/ProductDetails";
import Cart from "./page/Cart/Cart";
import AdminPanel from "./page/AdminPanel/AdminPanel";
import EditProduct from "./page/AdminPanel/EditProduct";
import Addproduct from "./page/AdminPanel/Addproduct";
import { Auth } from "./page/auth";
import Dashboard from "./page/dashboard/dashboard";
import RouteAuthGuard from "./components/auth/routeAuthGuard";

export default function AppRoutes() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                    path: "product/:productId",
                    element: <ProductDetails />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
                {
                    path: "adminpanel",
                    element: (
                        <RouteAuthGuard requiredRole="admin">
                            <AdminPanel />
                        </RouteAuthGuard>
                    ),
                },
                {
                    path: "editproduct/:productId",
                    element: (
                        <RouteAuthGuard requiredRole="admin">
                            <EditProduct />,
                        </RouteAuthGuard>
                    ),
                },
                {
                    path: "addproduct",
                    element: (
                        <RouteAuthGuard requiredRole="admin">
                            <Addproduct />
                        </RouteAuthGuard>
                    ),
                },
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: "auth",
            element: <Auth />,
        },
    ]);
    return routes;
}
