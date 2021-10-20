import {HTTPRequestActionType} from "../HttpRequestType";

export type SignInRequestType = {
    email?: string;
    password?: string;
};

export type SignInRequestActionType = (
    property: SignInRequestType
) => HTTPRequestActionType<"layout", "POST">;
