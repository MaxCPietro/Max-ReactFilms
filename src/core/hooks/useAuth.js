import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"

export const useAuth = () => {
    const {isloggedIn, login, logout} = useContext(AuthContext)
    return {isloggedIn, login, logout};
    }