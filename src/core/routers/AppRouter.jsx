import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/HomeView";
import LoginView from "../../features/login/LoginView";
import PrivateRoute from "../auth/components/PrivateRoute";

export const AppRouter = createBrowserRouter (
    [{
        path: "/",
        element: <PrivateRoute>
                    <HomeView/>
                </PrivateRoute>,
    },{
        path: "/login",
        element: <LoginView/>
    }]
)