import { useQuery } from "@tanstack/react-query";
import {
    fetchDashboardSummaryAsync,
    fetchMachineStatusAsync
} from "../services/dashboard.service"; // Asumo que exportas estas funciones

export const useDashboard = () => {

    // 1. Query para el Resumen (Totales)
    const summaryQuery = useQuery({
        queryKey: ["dashboard-summary"],
        queryFn: async () => {
            const { call } = fetchDashboardSummaryAsync();
            const response = await call;
            return response.data;
        }
    });

    // 2. Query para el Gráfico (Estados)
    const statusQuery = useQuery({
        queryKey: ["dashboard-status"],
        queryFn: async () => {
            const { call } = fetchMachineStatusAsync();
            const response = await call;
            return response.data;
        }
    });

    // 3. Transformación de datos para Recharts
    // Convertimos { "Disponible": 5, "Ocupado": 2 } -> [ { name: "Disponible", value: 5, color: "#..." } ]
    const chartData = statusQuery.data ? [
        { name: "Disponible", value: statusQuery.data.Disponible || 0, color: "#10b981" }, // Emerald-500
        { name: "En Uso", value: statusQuery.data.Ocupado || 0, color: "#f59e0b" },     // Amber-500
        { name: "Mantenimiento", value: statusQuery.data.Mantenimiento || 0, color: "#ef4444" } // Red-500
    ].filter(item => item.value > 0) : [];

    return {
        summary: summaryQuery.data,
        chartData,
        isLoading: summaryQuery.isLoading || statusQuery.isLoading,
        isError: summaryQuery.isError || statusQuery.isError,
        refetch: () => { summaryQuery.refetch(); statusQuery.refetch(); }
    };
};