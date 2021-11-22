export const getTodoListFromlocalStorage = () => {
  if (!window.localStorage.getItem('todoList')) {
    const defaultValue = [
      {
        id: 1,
        content: 'Complete online JavaScript course',
        completed: false,
      },
      {
        id: 2,
        content: 'Jog around the park 3x',
        completed: false,
      },
      {
        id: 3,
        content: '10 minutes meditation',
        completed: false,
      },
      {
        id: 4,
        content: 'Read for 1 hour',
        completed: false,
      },
      {
        id: 5,
        content: 'Pick up groceries',
        completed: false,
      },
      {
        id: 6,
        content: 'Complete Todo App on Frontend Mentor',
        completed: true,
      },
    ];
    window.localStorage.setItem('todoList', JSON.stringify(defaultValue));
  }

  return JSON.parse(window.localStorage.getItem('todoList'));
};

export const storeNewTodoListToLocal = (newTodoList) =>
  window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
