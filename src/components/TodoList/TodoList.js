import React from 'react';
import { useTodoContext } from '../../context/TodoProvider';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';
import TodoListStatusBar from './TodoListStatusBar/TodoListStatusBar';

const TodoList = () => {
  const { status, todoList, getActiveTodoItems, getCompletedTodoItems } =
    useTodoContext();
  const activeTodos = getActiveTodoItems();
  const completedTodos = getCompletedTodoItems();

  if (status === 'active') {
    return (
      <>
        <ul className="todos">
          { activeTodos.map(({ id, content }) => (
            	<TodoItem key={id} content={content} id={id} />
          ))}
        </ul>
        <TodoListStatusBar todoListSize={activeTodos.length} />
      </>
    );
  } else if (status === 'completed') {
    return (
      <>
        <ul className="todos">
          {completedTodos.map(({ id, content }) => (
            <TodoItem key={id} content={content} id={id} />
          ))}
        </ul>
        <TodoListStatusBar todoListSize={completedTodos.length} />
      </>
    );
  }

  return (
    <>
      <ul className="todos">
        {todoList.map(({ id, content }) => (
          <TodoItem key={id} content={content} id={id} />
        ))}
      </ul>
      <TodoListStatusBar todoListSize={todoList.length} />
    </>
  );
};

export default TodoList;
