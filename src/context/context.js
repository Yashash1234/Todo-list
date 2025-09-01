import { createContext, useContext } from "react";

// 1. Create Context with default values
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {}
});

// 2. Custom hook for easier access
export const useTodo = () => {
  return useContext(TodoContext);
};

// 3. Export Provider
export const TodoProvider = TodoContext.Provider;
