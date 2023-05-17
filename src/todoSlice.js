import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [""],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state[index] = updatedTodo;
      }
    },
    deleteAllTodos:(state, action)=>{
      return [""]
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, deleteAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
