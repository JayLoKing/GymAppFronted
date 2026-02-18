import { LayoutDashboard, Dumbbell, Activity, Users } from "lucide-react";

export const navItems = [
    {
        label: "Inicio",
        path: "/dashboard",
        icon: LayoutDashboard,
        roles: ["admin", "trainer", "user"]
    },
    {
        label: "Máquinas",
        path: "/machines",
        icon: Dumbbell,
        roles: ["admin", "trainer"]
    },
    {
        label: "Ejercicios",
        path: "/exercises",
        icon: Activity,
        roles: ["admin", "trainer"]
    },
    {
        label: "Usuarios",
        path: "/users",
        icon: Users,
        roles: ["admin"]
    }
];