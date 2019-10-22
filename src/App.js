import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import MainPage from './components/mainpage/mainpage.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
      
    </div>
  );
}

export default App;
