const API_BASE = 'http://localhost:3001/api';

export interface Machine {
  machine_id: number;
  name_machine: string;
  status: 'available' | 'occupied' | 'out_of_order';
  type_machine: string;
}

export async function fetchMachines(): Promise<Machine[]> {
  const response = await fetch(`${API_BASE}/machines`);
  if (!response.ok) {
    throw new Error('Error al cargar las máquinas');
  }
  return response.json();
}
