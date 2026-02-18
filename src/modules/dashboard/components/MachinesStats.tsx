import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChartData {
    name: string;
    value: number;
    color: string;
}

interface Props {
    data: ChartData[];
}

export const MachinesChart = ({ data }: Props) => {
    if (data.length === 0) {
        return <div className="text-center py-10 text-gray-500">No hay datos de máquinas disponibles.</div>;
    }

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Estado de la Maquinaria</h3>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};