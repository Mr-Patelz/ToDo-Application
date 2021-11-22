import { useTodoContext } from '../../../../context/TodoProvider';
import './CompleteButton.scss';

const CompleteButton = ({ id }) => {
  const { isCompleted, completeTodoItem } = useTodoContext();

  return (
    <button
      onClick={() => {
        completeTodoItem(id);
      }}
      className={`todo__complete-btn ${isCompleted(id) ? 'completed' : null}`}
    >
      <div className={`btn-bg-filler ${isCompleted(id) ? 'completed' : null}`}>
        <svg
          className={`${isCompleted(id) ? 'showSVG' : null}`}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
    </button>
  );
};

export default CompleteButton;
