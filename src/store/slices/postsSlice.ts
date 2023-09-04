import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  initialState: {},
  name: "posts",
  reducers: {
    addPost() {
      return 1;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
