import { Todos } from './todos/Todos';
import { Routes, Route, Link } from 'react-router-dom';
import { memo } from 'react';

export const Main = memo(() => {
  return (
    <section className='task-list'>
      <menu className='menu'>
        <Link className='menu__item' to='/'>
          Tasks
        </Link>
        <Link className='menu__item' to='done'>
          Done
        </Link>
      </menu>
      <Routes>
        <Route path='/' element={<Todos done={false} />} />
        <Route path='done' element={<Todos done={true} />} />
      </Routes>
    </section>
  );
});
