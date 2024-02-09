import { configureStore } from "@reduxjs/toolkit";
import song from "./slice/song";
import songs from "./slice/songs";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    song,
    songs,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
