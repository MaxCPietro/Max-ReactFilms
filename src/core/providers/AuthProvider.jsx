import { AuthContext } from "../auth/context/AuthContext"
import { useEffect, useState } from "react"

export const AUTH_KEY = "isloggedIn";


export const AuthProvider = ({children}) => {
    const [isloggedIn, setIsloggedIn] = useState(false);
    
    const saveLoginState = (state) => { localStorage.setItem(AUTH_KEY, state);}
    const getLoginState = () => localStorage.getItem(AUTH_KEY);
    const removeLoginState = () => localStorage.removeItem(AUTH_KEY);

    //Para saber el estado de login
    useEffect(() => {
        const initAuth = async () => {
            const logingState = getLoginState();
            if (!logingState) return;
            setIsloggedIn(logingState);
        }
        initAuth();
    },[]);

    const login = async () => {
        setIsloggedIn(true);
        saveLoginState(true)};
    
    const logout = async () => {
        setIsloggedIn(false);
        removeLoginState()};
        
    return (
        <AuthContext.Provider 
            value={{isloggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}