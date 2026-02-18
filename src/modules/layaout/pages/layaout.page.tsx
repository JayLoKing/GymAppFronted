import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuthStore } from "../../auth/hooks/useAuthStore";

export const Layout = () => {
    const isAuth = useAuthStore((state) => state.isAuth);

    if (!isAuth) {
        return <Navigate to="/auth" replace />;
    }

    return (
        <div style={{ minHeight: "100vh", background: "#f5f5f5", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
            <Navbar />
            <main style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px" }}>
                <Outlet />
            </main>
        </div>
    );
};