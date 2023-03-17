import React, {FC, createContext} from 'react';
import { Person } from './components/Person';
import { HairColor } from './components/Person';
import './App.css';


interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const contextValue: AppContextInterface = {
  name: 'Pedro',
  age: 20,
  country: 'Brazil'
}

const App: FC = () => {


  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person name="Noemi" age={20} email="noemiemail@gmail.com" hairColor={HairColor.Brown}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;

