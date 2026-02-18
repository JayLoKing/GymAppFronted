import { httpClient } from "../../../config/axios";
import { loadAbort } from "../../../config/load-abort";
import { UseApiCall } from "../../../config/useApiCall";
import { AuthUrl } from "../paths/auth.path";
import { CredentialsDto } from "../models/response/credentials.dto";
import { AuthDto } from "../models/request/auth.schema";

export const loginAsync = (values: AuthDto): UseApiCall<CredentialsDto> => {
    const controller = loadAbort();
    return {
        call: httpClient.post<CredentialsDto>(AuthUrl.Login, values, { signal: controller.signal }),
        controller
    }
}