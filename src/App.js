import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import MainPage from './components/mainpage/mainpage.component';
import airportPage from './components/airportPage/airportPage.component';

// import {airportData} from '../../data';

// import Airport from '../airport/airport.component';


// class App extends React.Component{
//   state={
//     airports : airportData
//   }
//   render(){
//     const 
//   }
// }

function App() {
  return (
    <div className="App">
    
      <Switch>
        {/* <Route path='/' component={Header} /> */}
        <Route exact path='/' component={MainPage} />
        <Route path='/:id' component={airportPage } />
      </Switch>
      
    </div>
  );
}

export default App;
