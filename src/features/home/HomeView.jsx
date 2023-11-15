import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'

const HomeView = () => {
    
    const {logout,isloggedIn} = useAuth();
    console.log(isloggedIn)
    return (
    <div>
        <h1>HOME</h1>
        <button onClick={logout}>Cerrar Sesión</button>
    </div>
)
}

export default HomeView