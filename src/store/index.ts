import {
  AnyAction,
  ThunkMiddleware,
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { postsReducer } from "./slices/postsSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
  enhancers: [applyMiddleware(sagaMiddleware)],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStore = ToolkitStore<
  RootState,
  AnyAction,
  [ThunkMiddleware<RootState, AnyAction>]
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
