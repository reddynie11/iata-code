import React from 'react';
import './airport.styles.css';
import {connect } from 'react-redux';

import {Link } from 'react-router-dom';

const Airport = (props)=>{
    const {airports} = props
    console.log(airports)
    return(
        <div className='menu-page'>
            {airports.map((airport)=>(
                 <Link to={'/'+airport.id}>
                 <div className='menu-item'>
                     <img className='background' src={require(`../images/${airport.id}.jpg`)} /> 
                     <div className='content'>
                         <h1 className='title'>{airport.id.toUpperCase()}</h1> 
                     </div>       
                 </div>
             </Link>
            ))}
        </div>
    )
}


export default Airport;