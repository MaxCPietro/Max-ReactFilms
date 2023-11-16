import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/HomeView";
import LoginView from "../../features/login/LoginView";
import PrivateRoute from "../auth/components/PrivateRoute";
import PublicRoute from "../auth/components/PublicRoute";

export const AppRouter = createBrowserRouter (
    [{
        path: "/",
        element: <PrivateRoute>
                    <HomeView/>
                </PrivateRoute>,
    },{
        path: "/login",
        element: <PublicRoute>
                    <LoginView/>
                </PublicRoute>,
    },
    {
        //404 ficticio
        path: "*",
        element: <div>
                    <h1>404 página no encontrada</h1>
                    <h3 style={{color: "red"}}>Este es un cod 404 FICTICIO (❁´◡`❁)</h3>
                </div>
    }]
)