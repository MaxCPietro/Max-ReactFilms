import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {isloggedIn} = useAuth(); 

    if (isloggedIn) {return children}

    return <Navigate to={"/login"} />
}
export default PrivateRoute