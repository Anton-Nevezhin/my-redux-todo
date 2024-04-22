import { createSlice } from "@reduxjs/toolkit";

const initial = {
  // id: 123,
  // text: '567',
  // complete: false
  todos: [
    //     {
    //         id: 123,
    // name: '567',
    // complete: false
    // }
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initial,
  reducers: {
    uploadTodo(state, action) {
      console.log(state);
      console.log("name: ", action.payload);

      let arrTodo = localStorage.getItem("todo");
           
      if (arrTodo !== null) {
        state.todos = JSON.parse(arrTodo);
      }

    },
    addTodo(state, action) {
      console.log(state);
      console.log("name: ", action.payload);

      state.todos.push({
        id: new Date().toISOString(),
        name: action.payload,
        complete: false,
      });

      let arrTodo = JSON.stringify(state.todos)
      localStorage.setItem('todo', arrTodo)
  
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      console.log("todos: ", state.todos);
      console.log("id: ", action.payload);

      let arrTodo = JSON.stringify(state.todos)
      localStorage.setItem('todo', arrTodo)

    },

    toogleCompleted(state, action) {
      state.todos = state.todos.map(
        (item) =>
          (item.id === action.payload && {
            id: item.id,
            name: item.name,
            complete: !item.complete,
          }) ||
          item
      );

      let arrTodo = JSON.stringify(state.todos)
      localStorage.setItem('todo', arrTodo)

      console.log("toogle: ", action.payload);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, toogleCompleted, uploadTodo } =
  todoSlice.actions;
