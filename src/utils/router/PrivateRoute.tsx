import React from 'react';

import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from '../hook/hook';

const PrivateRoute = () => {
    const auth = useAuth()
    return (
        <div>
            {auth ? <Outlet /> : <Navigate to='/login' />}
        </div>
    );
};

export default PrivateRoute;