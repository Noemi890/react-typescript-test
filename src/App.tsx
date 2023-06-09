import React, {FC, createContext} from 'react';
import { Person } from './components/Person';
import { HairColor } from './components/Enums';
import { AppContextInterface } from './components/Interfaces';
import './App.css';




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

