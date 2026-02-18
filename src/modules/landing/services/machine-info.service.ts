import { httpClient } from "../../../config/axios";
import { loadAbort } from "../../../config/load-abort";
import { UseApiCall } from "../../../config/useApiCall";
import { MachineInfoResponseDto } from "../models/machine-response.dto";
import { MachineInfoUrl } from "../paths/machine-info.url";

export const fetchAllMachinesAsync = (): UseApiCall<MachineInfoResponseDto[]> => {
    const controller = loadAbort();
    return {
        call: httpClient.get<MachineInfoResponseDto[]>(MachineInfoUrl.FetchAll, { signal: controller.signal }),
        controller
    }
}