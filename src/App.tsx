import React from 'react';
import './styles/globals.scss';
import CatchBtn from './components/CatchBtn';
import ZooList from './components/ZooList';

const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
      <CatchBtn />
      <ZooList />
    </div>
  );
}

export default App;
