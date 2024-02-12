import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./slice/songsSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
