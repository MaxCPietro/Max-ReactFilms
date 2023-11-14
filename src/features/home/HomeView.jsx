import React from 'react'
import { useAuth } from '../../core/hooks/useAuth'

const HomeView = () => {
    const {isloggedIn} = useAuth();
    console.log("isloggedIn", isloggedIn);
    return (
    <div>HomeView</div>
)
}

export default HomeView