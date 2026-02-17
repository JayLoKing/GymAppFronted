import { useState, useEffect } from 'react';
import { fetchMachines } from '../helpers/api';
import type { Machine } from '../helpers/api';



export function useMachines() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchMachines()
      .then(setMachines)
      .catch((err) => setError(err instanceof Error ? err.message : 'Error'))
      .finally(() => setLoading(false));
  }, []);

  return { machines, loading, error };
}
