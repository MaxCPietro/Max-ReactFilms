import { useState } from 'react'
import { useAuth } from '../../core/hooks/useAuth'
import AppButton from '../../core/ReusableComponets/Butoons/AppButton';
import AppInput from '../../core/ReusableComponets/Inputs/AppInput';
import AppForm from '../../core/ReusableComponets/Forms/AppForm';
import No_soy from '../../img/No_soy.jpg';


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
        <AppForm onSubmit={handleSubmit}>
            <AppInput type= "email" name="email"></AppInput>
            <AppInput type= "password" name="password"></AppInput>
            <AppButton 
                style={
                    {
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        border: "none",
                        cursor: "pointer"
                    }
                }
                type="submit">
                    Iniciar Sesión
            </AppButton>
            <p>{LoadError}</p>
        </AppForm>
        <br/><br/>
        <img src={No_soy} alt="No soy" 
            style={{
                display: 'block',
                margin: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',}} />
        <h3 style={{textAlign: 'center',color: 'red'}}>No soy un clon de Netflix, Soy un moustro!</h3>
    </div>
    )
}

export default LoginView