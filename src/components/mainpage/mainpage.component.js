import React from 'react';
import './mainpage.styles.css';
import { connect } from 'react-redux'

import Header from '../header/header.component';
import Airport from '../airport/airport.component';

class MainPage extends React.Component{
    // state={
    //     airports : airportData
    // }

    render(){
        console.log(this.props)
        return(
            <div>
                <Header />
                <div className='main-page'>
                {this.props.airports.map((airport)=>(
                    <Airport key={airport.id} airport={airport} />
                ))}
           </div>
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
