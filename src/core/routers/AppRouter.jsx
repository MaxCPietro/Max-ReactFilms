import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/HomeView";
import LoginView from "../../features/login/LoginView";

export const AppRouter = createBrowserRouter (
    [{
        path: "/",
        element: <HomeView/>
    },{
        path: "/login",
        element: <LoginView/>
    }]
)