import React from 'react';
import CompleteButton from './CompleteButton/CompleteButton';
import DeleteButton from './DeleteButton/DeleteButton';
import TodoContent from './TodoContent/TodoContent';
import './TodoItem.scss';

const TodoItem = ({ id, content }) => {
  return (
    <li className="todo">
      <CompleteButton id={id} />
      <TodoContent id={id} content={content} />
      <DeleteButton id={id} />
    </li>
  );
};

export default TodoItem;
