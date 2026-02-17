import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

export interface Machine {
  machine_id: number;
  name_machine: string;
  status: 'available' | 'occupied' | 'out_of_order';
  type_machine: string;
}

export async function fetchMachines(): Promise<Machine[]> {
  try {
    const { data } = await axios.get<Machine[]>(`${API_BASE}/machines`);
    return data;
  } catch (error) {
    console.error('Error fetching machines:', error);
    throw new Error('Error al cargar las máquinas');
  }
}

export async function fetchMachineCount(): Promise<{ total: number; displayCount: string }> {
  try {
    const { data } = await axios.get<{ total: number; displayCount: string }>(`${API_BASE}/machines/count`);
    return data;
  } catch (error) {
    console.error('Error fetching machine count:', error);
    return { total: 0, displayCount: '50+' }; // Default fallback
  }
}
