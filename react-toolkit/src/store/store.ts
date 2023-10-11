import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { allRequestReducer } from "./combineReducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./middleware/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    allRequest: allRequestReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the 'RootState' and 'AppDispatch' types from the store itself.
export type RootState = ReturnType<typeof store.getState>;

//Inferred type : {posts: PostState, comments: CommentState, ....}
export type AppDispatch = typeof store.dispatch;
