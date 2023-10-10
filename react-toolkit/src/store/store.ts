import { configureStore } from "@reduxjs/toolkit";
import { allRequestReducer } from "./combineReducers";

export const store = configureStore({
  reducer: {
    allRequest: allRequestReducer,
  },
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself.
export type RootState = ReturnType<typeof store.getState>;

//Inferred type : {posts: PostState, comments: CommentState, ....}
export type AppDispatch = typeof store.dispatch;
