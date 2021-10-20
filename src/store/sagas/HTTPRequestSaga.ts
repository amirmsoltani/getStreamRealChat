import { takeEvery, put, call } from "redux-saga/effects";
import {
  HTTPRequestActionType,
  HTTP_REQUEST,
  HTTP_REQUEST_FAILURE,
  HTTP_REQUEST_MAP_DATA,
  HTTP_REQUEST_SUCCESS,
  StoreType,
} from "../../types";
import axiso, { AxiosResponse } from "axios";

function* HTTPRequestSaga(action: HTTPRequestActionType<keyof StoreType>) {
  const {
    payload: { data, url, method, target, reducer, mapData,property },
  } = action;
  try {
    const response: AxiosResponse = yield call(axiso.request, {
      data,
      url,
      method,
    });
    yield put({
      type: mapData ? HTTP_REQUEST_MAP_DATA : HTTP_REQUEST_SUCCESS,
      payload: {
        reducer,
        target,
        response: response.data,
        property: property,
      },
    });
  } catch (error) {
    yield put({
      type: HTTP_REQUEST_FAILURE,
      payload: {
        reducer,
        target,
        error,
      },
    });
  }
}

export default takeEvery(HTTP_REQUEST, HTTPRequestSaga);
