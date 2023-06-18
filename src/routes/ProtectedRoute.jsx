import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
    let user_token = JSON.parse(localStorage.getItem('additional'))?.additional?.user_token;
    let localUserPath = JSON.parse(localStorage.getItem('dashboard-sub-path'));
    if (!user_token || !localUserPath) {
        return <Navigate to="/" />
    }
    return (
        <Outlet />
    )
}

export default ProtectedRoute