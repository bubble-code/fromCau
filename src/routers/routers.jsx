import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import App from '../App';
import ContainerPage from '../pages/ContainerPage';
import NuevoPage from '../pages/NuevoPage';
import AbiertosPage from '../pages/AbiertosPage';


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <ContainerPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'nuevo',
                element: <NuevoPage />
            },
            {
                path: 'abiertos',
                element: <AbiertosPage />
            }
        ]
    }
])