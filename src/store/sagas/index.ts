import { take } from "redux-saga/effects";
import { postsActions } from "../slices/postsSlice";

export function* watchClickSaga() {
  yield take(postsActions.addPost);
  console.log("request 1");
}

export default function* rootSaga() {
  yield watchClickSaga();
}
