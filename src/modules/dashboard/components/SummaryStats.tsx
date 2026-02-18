import { Users, Dumbbell, Activity } from "lucide-react";
import { DashboardSummaryDto } from "../models/dashboard.dto";

interface Props {
    data?: DashboardSummaryDto;
}

export const SummaryStats = ({ data }: Props) => {
    const stats = [
        {
            label: "Usuarios Totales",
            value: data?.totalUsers || 0,
            icon: Users,
            color: "bg-blue-500",
        },
        {
            label: "Máquinas Registradas",
            value: data?.totalMachines || 0,
            icon: Dumbbell,
            color: "bg-indigo-500",
        },
        {
            label: "Ejercicios Activos",
            value: data?.totalExercises || 0,
            icon: Activity,
            color: "bg-purple-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center">
                    <div className={`${stat.color} p-4 rounded-lg text-white shadow-md`}>
                        <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-5">
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                            {stat.label}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                            {stat.value}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};