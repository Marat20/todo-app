import { memo, useState } from 'react';
import { useAddTodosMutation } from '../../redux/todosApi';
import { task } from '../../utils/taskObj';

export const Header = memo(() => {
  const [text, setText] = useState('');
  const [addTodos] = useAddTodosMutation();

  const handleAddTodos = async (
    text: string,
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newTask = task(text, false);
    await addTodos(newTask).unwrap();
    setText('');
  };

  return (
    <header>
      <h1>Todo List</h1>
      <form id='new-task-form'>
        <input
          type='text'
          value={text}
          name='new-task-input'
          id='new-task-input'
          placeholder='What do you have planned?'
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          onClick={(e) => handleAddTodos(text, e)}
          id='new-task-submit'
          value='Add task'
        />
      </form>
    </header>
  );
});
