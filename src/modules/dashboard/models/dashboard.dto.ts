// Resumen general
export interface DashboardSummaryDto {
    totalUsers: number;
    totalMachines: number;
    totalExercises: number;
}

// Estado de máquinas (Clave: Estado, Valor: Cantidad)
export interface MachineStatusDto {
    Disponible: number;
    Ocupado: number;
    Mantenimiento: number;
    [key: string]: number; // Por si llegan otros estados
}