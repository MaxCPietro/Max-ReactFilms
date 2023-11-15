import { AuthContext } from "../auth/context/AuthContext"
import { useState } from "react"


export const AuthProvider = ({children}) => {
    const [isloggedIn, setIsloggedIn] = useState(false);
    const login = async () => {setIsloggedIn(true)};
    const logout = async () => {setIsloggedIn(false)};

    return (
        <AuthContext.Provider 
            value={{isloggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}