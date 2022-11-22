import { memo } from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/Main';

export const App = memo(() => {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
    </>
  );
});
