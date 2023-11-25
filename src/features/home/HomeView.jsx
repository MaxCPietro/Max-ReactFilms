import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'
import AppButton from '../../core/ReusableComponets/Butoons/AppButton';

const HomeView = () => {
    
    const {logout,isloggedIn} = useAuth();
    console.log(isloggedIn)
    return (
    <div>
        <h1>HOME</h1>
        <AppButton 
            style={
                {
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer"
                }
            }
            onClick={logout}>Cerrar Sesión
        </AppButton>
    </div>
)
}

export default HomeView