import { takeLatest, call, put } from "redux-saga/effects";

export function* watcherSagaFetchAPI() {
  yield takeLatest("API_CALL_REQUEST", workerSagaFetchAPI);
}

function fetchProductsApi() {
  return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
}

function* workerSagaFetchAPI() {
  try {
    var response = yield call(fetchProductsApi);
    yield put({ type: "API_CALL_SUCCESS", response });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
