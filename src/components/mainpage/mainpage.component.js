import React from 'react';
import './mainpage.styles.css';
import {airport} from '../../data';

import Airport from '../airport/airport.component';

class MainPage extends React.Component{
    state={
        airports : airport
    }

    render(){
        console.log(this.state.airport)
        return(
            <div className='main-page'>
                {this.state.airports.map((airport)=>(
                    <Airport key={airport.id} airport={airport} />
                ))}
           </div>
        )
    }
}
export default MainPage;
