import {StatusType} from "../actions";
import {AxiosError} from "axios";

export type LayoutReducerType = {
    auth: { authToken: undefined | string, status: StatusType, error?: AxiosError }
}
