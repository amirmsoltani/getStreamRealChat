import * as layout from "./layout";
import {
    HTTPRequestActionType,
    HTTPRequestSuccessActionType,
    HTTPRequestFailureActionType,
} from "./HttpRequestType";

// reducers all  action type export here
export type LayoutActionsType =
    | HTTPRequestActionType<"layout">
    | HTTPRequestFailureActionType<"layout">
    | HTTPRequestSuccessActionType<"layout">;

export * from "./HttpRequestType";
export * from "./layout";
