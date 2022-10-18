import React from 'react';
import { useGetTodosQuery } from '../redux/todosApi';
import { Todo } from './Todo';

export const Todos = () => {
  const { data = [] } = useGetTodosQuery();

  return (
    <div id='tasks'>
      {data.length == 0 && <h2>Nothing to do...</h2>}
      {data.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
};
