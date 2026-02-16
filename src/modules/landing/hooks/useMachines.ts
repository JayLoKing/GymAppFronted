import { useState, useEffect } from 'react';
import { fetchMachines } from '../helpers/api';
import type { Machine } from '../helpers/api';

/** Datos mock - el hook usará fetchMachines() cuando la API esté lista */
const MOCK_MACHINES: Machine[] = [
  { machine_id: 1, name_machine: 'Cinta de correr 1', status: 'available', type_machine: 'C' },
  { machine_id: 2, name_machine: 'Cinta de correr 2', status: 'occupied', type_machine: 'C' },
  { machine_id: 3, name_machine: 'Press de banca', status: 'available', type_machine: 'F' },
  { machine_id: 4, name_machine: 'Máquina de remo', status: 'occupied', type_machine: 'C' },
  { machine_id: 5, name_machine: 'Leg press', status: 'available', type_machine: 'F' },
  { machine_id: 6, name_machine: 'Bicicleta estática 1', status: 'occupied', type_machine: 'C' },
  { machine_id: 7, name_machine: 'Bicicleta estática 2', status: 'available', type_machine: 'C' },
  { machine_id: 8, name_machine: 'Prensa de hombros', status: 'out_of_order', type_machine: 'F' },
  { machine_id: 9, name_machine: 'Máquina de curl', status: 'available', type_machine: 'F' },
  { machine_id: 10, name_machine: 'Elíptica', status: 'occupied', type_machine: 'C' },
];

export function useMachines() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Por ahora: datos mock. Cambiar a fetchMachines() cuando la API esté lista
    const useApi = false;
    if (useApi) {
      fetchMachines()
        .then(setMachines)
        .catch((err) => setError(err instanceof Error ? err.message : 'Error'))
        .finally(() => setLoading(false));
    } else {
      const timer = setTimeout(() => {
        setMachines(MOCK_MACHINES);
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return { machines, loading, error };
}
