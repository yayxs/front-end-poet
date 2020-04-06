import { takeEvery, takeLatest, throttle, select } from "redux-saga/effects";
export function* defSage() {
  yield takeEvery("takeEvery", function* () {
    const state = yield select();
    console.log(state)
    console.log(`takeEvery`);
  });
  yield takeLatest("takeLatest", function () {
    console.log(`takeLatest`);
  });
  //   yield throttle("throttle", function () {
  //     console.log(`throttle`);
  //   });
}
