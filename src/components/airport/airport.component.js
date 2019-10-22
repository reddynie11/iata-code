import React from 'react';
import './airport.styles.css';

import {Link } from 'react-router-dom';

const Airport = (props)=>{
    return(
        <Link>
            <div className='menu-item'>
                <img className='background' src={require(`../images/${props.airport.id}.jpg`)} /> 
                <div className='content'>
                    <h1 className='title'>{props.airport.id.toUpperCase()}</h1> 
                </div>       
            </div>
        </Link>
    )
}
export default Airport;