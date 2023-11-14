import { AuthContext } from "../auth/context/AuthContext"

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{isLooggedIn:true}}>
            {children}
        </AuthContext.Provider>
    )
}