// import {
//   takeEvery,
//   takeLatest,
//   throttle,
//   select,
//   call,
//   take,
//   put
// } from "redux-saga/effects";

// import axios from "axios";
// export function* defSage() {

//   // yield take('take')

//   yield takeEvery("takeEvery", function* () {
//     const state = yield select((state) => state.payload);

//     const res = yield call(
//       axios.post,
//       `http://rap2.taobao.org:38080/app/mock/249413/mock-api/v1/users/login`,
//       {
//         ...state,
//       }
//     );
//     yield put({
//       type:"SUCCESS",
//       ...res
//     })
//     console.log(res);
//   });
//   // 最后的一次，取消正在运行中
//   yield takeLatest("takeLatest", function* () {
//     const state = yield select((state) => state.payload);

//     const res = yield call(
//       axios.post,
//       `http://rap2.taobao.org:38080/app/mock/249413/mock-api/v1/users/login`,
//       {
//         ...state,
//       }
//     );

//     console.log(res);
//   });
//   /**
//    * 毫秒值
//    */
//   yield throttle(0, "throttle", function* () {
//     const state = yield select((state) => state.payload);

//     const res = yield call(
//       axios.post,
//       `http://rap2.taobao.org:38080/app/mock/249413/mock-api/v1/users/login`,
//       {
//         ...state,
//       }
//     );

//     console.log(res);
//   });
// }

import { all } from "redux-saga/effects";
import { listSaga } from "./listSaga";
import { loginSaga } from "./loginSaga";
export function* defaultSaga() {
  yield all([loginSaga(), listSaga()]);
}
