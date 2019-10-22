import React from 'react';
import { connect } from 'react-redux';

const airportPage = (props)=>{
    console.log(props)
    return(
        <div className='detail-page'>
            <img className='detail-background' src={require(`../images/${props.airport.id}.jpg`)} />  
            <div className='deatil-content'>
                <h1 className='port-id'>{props.airport.id.toUpperCase()}</h1>
                <h2 className='port-name'>{props.airport.name.toUpperCase()}</h2>
                <h3>{props.airport.city.toUpperCase()}, {props.airport.country.toUpperCase()}</h3>
                <p>{props.airport.description}</p>
            </div>         
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    let ID = props.match.params.id;
    return{
        airport : state.find((item)=>{
            return item.id == ID;
        })
    }
}

export default connect(mapStateToProps)(airportPage);