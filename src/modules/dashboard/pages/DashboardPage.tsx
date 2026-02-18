import { useDashboard } from "../hooks/useDashboard";
import { SummaryStats } from "../components/SummaryStats";
import { MachinesChart } from "../components/MachinesStats";


export const DashboardPage = () => {
    const { summary, chartData, isLoading, isError, refetch } = useDashboard();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 mb-4">Error al cargar los datos del tablero.</p>
                <button
                    onClick={() => refetch()}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {/* Encabezado */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Panel de Control</h1>
                <p className="text-gray-500">Bienvenido al sistema de gestión IronForge.</p>
            </div>

            {/* 1. Tarjetas de Resumen */}
            <SummaryStats data={summary} />

            {/* 2. Sección de Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gráfico de Donas */}
                <MachinesChart data={chartData} />

                {/* (Opcional) Aquí podrías poner otro componente, ej: Usuarios recientes */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center justify-center text-gray-400 border-dashed border-2">
                    <p>Próximamente: Actividad Reciente</p>
                </div>
            </div>
        </div>
    );
};