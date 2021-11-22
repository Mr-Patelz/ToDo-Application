import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoProvider';
import './TodoForm.scss';

const TodoForm = () => {
  const { addTodoItem } = useTodoContext();
  const [todoItem, setTodoItem] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (todoItem.length > 0) {
      addTodoItem(todoItem);
      setTodoItem('');
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <span className="circle-box" />
      <input
        placeholder="Create a new todo..."
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
