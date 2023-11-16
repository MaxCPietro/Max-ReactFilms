import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'

const LoginView = () => {
    const {login} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
        
    return (
    <div>
        <h1>Max React Films</h1>
        <form onSubmit={handleSubmit}>
            <input type= "email" name="email" />
            <input type= "password" name="password" />
            <button type="submit">Iniciar Sesión</button>
        </form>

    </div>
    )
}

export default LoginView