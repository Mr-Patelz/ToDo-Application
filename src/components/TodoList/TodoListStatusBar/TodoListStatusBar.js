import React from 'react';
import { useTodoContext } from '../../../context/TodoProvider';
import './TodoListStatusBar.scss';

const TodoListStatus = ({ todoListSize }) => {
  const { status, setStatus, clearAllCompletedTodos } = useTodoContext();

  return (
    <div className="status">
      <div className="status__items-left">{todoListSize} items left</div>

      <div className="aac-wrapper">
        <button
          onClick={() => setStatus('')}
          className={`status-btns status__all ${
            status === '' ? 'hightLight' : null
          }`}
        >
          All
        </button>
        <button
          onClick={() => setStatus('active')}
          className={`status-btns status__active ${
            status === 'active' ? 'hightLight' : null
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setStatus('completed')}
          className={`status-btns status__completed ${
            status === 'completed' ? 'hightLight' : null
          }`}
        >
          Completed
        </button>
      </div>

      <button
        onClick={clearAllCompletedTodos}
        className="status-btns status__clear-completed"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListStatus;
