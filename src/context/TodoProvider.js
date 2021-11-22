import { createContext, useContext, useState } from 'react';
import {
  getTodoListFromlocalStorage,
  storeNewTodoListToLocal,
} from './FillLocalStorage';

const TodoContext = createContext();

let id = new Date().getTime();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(getTodoListFromlocalStorage());
  const [status, setStatus] = useState(''); 

  const addTodoItem = (content) => {
    const newTodoList = [...todoList, { id, content, completed: false }];
    setTodoList(newTodoList);
    storeNewTodoListToLocal(newTodoList);
    id++;
  };

  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    storeNewTodoListToLocal(newTodoList);
  };

  const completeTodoItem = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id && todo.completed === false) {
        return { ...todo, completed: true };
      } else if (todo.id === id && todo.completed === true) {
        return { ...todo, completed: false };
      } else {
        return todo;
      }
    });

    setTodoList(newTodoList);
    storeNewTodoListToLocal(newTodoList);
  };

  const isCompleted = (id) =>
    todoList.find((todo) => todo.id === id && todo.completed === true);

  const getLengthOfTodoItems = () => todoList.length;
  const getActiveTodoItems = () => todoList.filter((todo) => !todo.completed);
  const getCompletedTodoItems = () => todoList.filter((todo) => todo.completed);

  const clearAllCompletedTodos = () => {
    const newTodoList = todoList.filter((todo) => todo.completed === false);
    setTodoList(newTodoList);
    storeNewTodoListToLocal(newTodoList);
  };

  const contextValue = {
    todoList,
    status,
    setStatus,
    isCompleted,
    addTodoItem,
    deleteTodoItem,
    completeTodoItem,
    getLengthOfTodoItems,
    getActiveTodoItems,
    getCompletedTodoItems,
    clearAllCompletedTodos,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
