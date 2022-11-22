import { FC, memo } from 'react';
import { useGetTodosQuery } from '../../redux/todosApi';
import { Todo } from './Todo';

interface Props {
  done: boolean;
}

export const Todos: FC<Props> = memo(({ done }) => {
  const { data } = useGetTodosQuery(done);

  return (
    <div className='tasks'>
      {!done && data?.length === 0 && <h2>Nothing to do...</h2>}
      {done && data?.length === 0 && <h2>No done task...</h2>}
      {data?.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
});
