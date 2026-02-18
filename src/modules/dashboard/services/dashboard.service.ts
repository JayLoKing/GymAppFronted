import { httpClient } from "../../../config/axios";
import { loadAbort } from "../../../config/load-abort";
import { UseApiCall } from "../../../config/useApiCall";

export const StisticsAsync = (): UseApiCall<void> => {
    const controller = loadAbort();
    return {
        call: httpClient.post<void>({ signal: controller.signal }),
        controller
    }
}