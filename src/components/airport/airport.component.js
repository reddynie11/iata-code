import React from 'react';
import { Row, Col } from 'react'

const Airport = (props)=>{
    return(
        <div>
            {props.airport.id.toUpperCase()}
       </div>
    )
}
export default Airport;