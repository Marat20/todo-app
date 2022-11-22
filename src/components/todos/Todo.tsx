import React, { FC, memo } from 'react';
import { TodoData } from '../../models/models';
import {
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} from '../../redux/todosApi';
import { task } from '../../utils/taskObj';

export const Todo: FC<TodoData> = memo(({ text, id, done }) => {
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();

  const handleUpdateTodos = async (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updateTask = task(text, e.target.checked, id);
    updateTodos(updateTask);
  };

  const handleDeleteTodos = async (id: string) => {
    await deleteTodos(id);
  };

  return (
    <div className='task'>
      <div className='content'>
        <input
          className='form-check-input'
          checked={done}
          type='checkbox'
          name='todo'
          onChange={(e) => handleUpdateTodos(id, e)}
        />
        <span className={`text ${done && 'done'}`}>{text}</span>
      </div>
      <div className='actions'>
        <button className='delete' onClick={() => handleDeleteTodos(id)}>
          Delete
        </button>
      </div>
    </div>
  );
});
