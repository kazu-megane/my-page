import { delay, put, takeEvery } from "redux-saga/effects";
import {
  GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
  ASYNC_REDUX_SAGA_PROP_TEXT,
  GET_ASYNC_REDUX_SAGA_PROP_TYPE,
} from "../constant";

function* getAsyncReduxSagaProp() {
  yield put({
    type: GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
    data: ASYNC_REDUX_SAGA_PROP_TEXT,
  });
}

export function* rootSaga() {
  takeEvery(GET_ASYNC_REDUX_SAGA_PROP_TYPE, getAsyncReduxSagaProp);
}
