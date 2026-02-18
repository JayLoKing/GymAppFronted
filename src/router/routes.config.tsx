import { LandingPage } from "../modules/landing/pages/LandingPage";
import { AuthMainPage } from "../modules/auth/pages/auth.main-page";
import { Layout } from "../modules/layaout/pages/layaout.page";
import { Navigate } from "react-router-dom";

export const routeConfig = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/auth",
        element: <AuthMainPage />,
    },
    {
        path: "/dashboard",
        element: <Layout />,
    },
    {
        element: <Layout />, // <--- El Layout envuelve a los hijos
        children: [
            {
                path: "/statistics",
                element: <div>Página de Ejercicios (En construcción)</div>,
            },
            {
                path: "/machines",
                element: <div>Página de Ejercicios (En construcción)</div>, // Tu componente de máquinas
            },
            {
                path: "/exercises",
                element: <div>Página de Ejercicios (En construcción)</div>,
            },
            {
                path: "/users",
                element: <div>Gestión de Usuarios (En construcción)</div>,
            },
        ]
    },

    // 3. Ruta por defecto (404 -> Home)
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
];