import { StoreType } from "../store";

export const HTTP_REQUEST = "[All Reducers] Http Request";
export const HTTP_REQUEST_SUCCESS = "[All Reducer] Http Request Success";
export const HTTP_REQUEST_MAP_DATA = "[All Reducer] Http Request Map Data";
export const HTTP_REQUEST_FAILURE = "[All Reducer] Http Request Failure";

export type MethodType = "POST" | "GET" | "PATCH" | "DELETE" | "PUT";
export type StatusType = "success" | "loading" | "failure" | "idle" | undefined;

// request type
export type HTTPRequestActionType<
R extends keyof StoreType ,
M extends MethodType = MethodType,
> = {
  type: typeof HTTP_REQUEST;
  payload: {
    reducer: R;
    target: keyof StoreType[R];
    url: string;
    method: M;
    data?: M extends "GET" | "DELETE"
      ? undefined
      : { [key: string | number]: any };
    mapData?:boolean;
    property?:any;
  };
};

export type HTTPRequestSuccessActionType<
  R extends keyof StoreType,
  RESPONSE = any
> = {
  type: typeof HTTP_REQUEST_SUCCESS;
  payload: {
    reducer: R;
    target: keyof StoreType[R];
    response: RESPONSE;
    property?:any;
  };
};

export type HTTPRequestMapDataActionType<
  R extends keyof StoreType,
  RESPONSE = any
> = {
  type: typeof HTTP_REQUEST_MAP_DATA;
  payload: {
    reducer: R;
    target: keyof StoreType[R];
    response: RESPONSE;
    property?:any;
  };
};

export type HTTPRequestFailureActionType<
  R extends keyof StoreType,
  Error = any
> = {
  type: typeof HTTP_REQUEST_FAILURE;
  payload: {
    reducer: R;
    target: keyof StoreType[R];
    error: Error;
  };
};
