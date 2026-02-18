import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routes.config";
import { Suspense } from "react";

export const AppRoutes = () => {
    const routing = useRoutes(routeConfig);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {routing}
        </Suspense>
    );
}