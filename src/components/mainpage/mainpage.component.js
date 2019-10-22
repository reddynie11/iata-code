import React from 'react';
import './mainpage.styles.css';
import { connect } from 'react-redux'

import Airport from '../airport/airport.component';

class MainPage extends React.Component{
    // state={
    //     airports : airportData
    // }

    render(){
        console.log(this.props)
        return(
            <div className='main-page'>
                {this.props.airports.map((airport)=>(
                    <Airport key={airport.id} airport={airport} />
                ))}
           </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        airports: state
    }
}

export default connect(mapStateToProps)(MainPage);
