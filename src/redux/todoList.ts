import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: [{ id: 0, name: "lee" }],
  reducers: {
    addList: (state, action) => {
      console.log(state, action, action.payload);
      state.push(action.payload);
    },
  },
});

export const { addList } = todoList.actions;

export default todoList.reducer;
