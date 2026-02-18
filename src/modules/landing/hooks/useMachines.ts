import { useQuery } from '@tanstack/react-query';
import type { MachineInfoResponseDto } from '../models/machine-response.dto';
import { fetchAllMachinesAsync } from '../services/machine-info.service';

export function useMachines() {
  const { data, isLoading, isError, error } = useQuery<MachineInfoResponseDto[], Error>({
    queryKey: ['machines'],
    queryFn: async () => {
      const { call } = fetchAllMachinesAsync();
      const response = await call;
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    machines: data || [],
    loading: isLoading,
    error: isError ? (error as Error).message : null,
  };
}