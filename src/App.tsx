import React from 'react';
import HomeScreen from './home/HomeScreen';
import AppNavBar from './common/components/AppNavBar';
import AppRouter from './AppRouter';

function App() {
  return <React.Fragment>
    <AppNavBar position='static' />
    <AppRouter />
  </React.Fragment>;
}

export default App;
