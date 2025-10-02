import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "@/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
