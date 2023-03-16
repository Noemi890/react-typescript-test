import React, {FC} from 'react';
import { Person } from './components/Person';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Person name="Noemi" age={20} email="noemiemail@gmail.com"/>
    </div>
  );
}

export default App;
