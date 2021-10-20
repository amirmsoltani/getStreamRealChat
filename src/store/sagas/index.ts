import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import HTTPRequestSaga from "./HTTPRequestSaga";

export function* AppSaga() {
    yield all([HTTPRequestSaga,]);
}

export default createSagaMiddleware();
