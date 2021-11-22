import React from 'react';
import { useTodoContext } from '../../../../context/TodoProvider';
import './TodoContent.scss';

const TodoContent = ({ id, content }) => {
  const { isCompleted } = useTodoContext();

  return (
    <div className={`todo__content ${isCompleted(id) ? 'cross-out' : null}`}>
      {content}
    </div>
  );
};

export default TodoContent;
