import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'

const LoginView = () => {
    const {login,isloggedIn} = useAuth();
    console.log(isloggedIn)
    
    return (
    <div>
        <h1>Max React Films</h1>
        <button onClick={login}>Inciar Sesión</button>
    </div>
    )
}

export default LoginView