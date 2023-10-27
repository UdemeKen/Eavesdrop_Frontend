import { Navigate, createBrowserRouter } from 'react-router-dom';
import Homepage from './views/Homepage';
import GuestLayout from './components/GuestLayout';
import Login from './views/Login';
import Signup from './views/Signup';
import Successpage from './views/Successpage';
import Emailverifcationpage from './views/Emailverifcationpage';
import DefaultLayout from './components/DefaultLayout';
import Dashboard from './views/Dashboard';


const router = createBrowserRouter([
    {
        path: '/homepage',
        element: <Homepage />
    },
     {
        path: '/successpage',
        element: <Successpage />
     },
     {
        path: '/emailverifcationpage',
        element: <Emailverifcationpage />
     },
    {
        path: '/guest',
        element: <GuestLayout />,
        children: [
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
        
            },
        ]
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Navigate to={"/"}/>
            },
            {
                path: '/',
                element: <Dashboard />
        
            },
        ]
    },
]);

export default router;