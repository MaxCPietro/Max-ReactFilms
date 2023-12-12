import React from 'react'
import { AuthProvider } from './AuthProvider'
import LsitaDeFavoritosProvider from './LsitaDeFavoritosProvider'

const RootProvider = ({children}) => {
return (
    <AuthProvider>
        <LsitaDeFavoritosProvider>{children}</LsitaDeFavoritosProvider>
    </AuthProvider>
        
)
}

export default RootProvider