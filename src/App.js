import React from 'react';
// import TodoList from './components/TodoList'
import ComponentA from './components/ComponentA';
import './App.css';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const App = () => (
  <div>
    <UserContext.Provider value={'David'}>
      <ChannelContext.Provider value={'ClosureConsulting'}>
      <ComponentA />
      </ChannelContext.Provider>
    </UserContext.Provider>
  </div>
);

export default App;
