import React from 'react';

import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from '../hook/hook';

const AuthPrivateRoute = () => {
    const auth = useAuth()
    return (
        <div>
            {auth ? <Navigate to='/' /> :  <Outlet />}
        </div>
    );
};

export default AuthPrivateRoute;