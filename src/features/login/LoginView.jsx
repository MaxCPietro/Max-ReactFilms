import { useState } from 'react'
import { useAuth } from '../../core/hooks/useAuth'

const LoginView = () => {
    const {login} = useAuth();

    //defino los estados
    const [, setIsLoading] = useState(false);
    const [LoadError, setLoadError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const fomulario = e.taget;
        const formData = new FormData(fomulario);
        const {email, password} = Object.fromEntries(formData);
        login(email, password);*/

        setIsLoading(true);
        try {
            const {email,password} = Object.fromEntries(new FormData(e.target));
            if(!email || !password) throw new Error("Todos los campos son obligatorios");
            if(e.target.email.value !== "admin@example" || e.target.password.value !== "admin") 
                throw new Error("Credenciales incorrectas");
            await login(email, password);
        } catch (error) {
            setLoadError(error.message); 
        } finally { setIsLoading(false);
        }
    }
        
    return (
    <div>
        <h1>Max React Films</h1>
        <form onSubmit={handleSubmit}>
            <input type= "email" name="email" />
            <input type= "password" name="password" />
            <button type="submit">Iniciar Sesión</button>
            <p>{LoadError}</p>
        </form>
    </div>
    )
}

export default LoginView