import React from 'react'
import {useAuth} from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {

    const {isloggedIn} = useAuth();

    if (isloggedIn) return <Navigate to={"/"} />

    return children
}

export default PublicRoute