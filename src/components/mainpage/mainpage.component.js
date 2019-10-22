import React from 'react';
import './mainpage.styles.css';
import { connect } from 'react-redux'

import Header from '../header/header.component';
import Airport from '../airport/airport.component';

import {searchTerm} from '../../redux/search/search.action';

class MainPage extends React.Component{
    state={
        searchTerm : ''
    }
    handleSearch= (e)=>{
        this.setState({searchTerm: e.target.value})
    }



    render(){
        const {airports} = this.props;
        const { searchTerm } = this.state;
        console.log(searchTerm)
        const searchFilter = airports.filter(contact => {
            return(
              contact.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
        return(
            <div>
                <Header search = {this.handleSearch}/>
                <div className='main-page'>
                {/* {this.props.airports.map((airport)=>(
                    <Airport key={airport.id} airport={airport} />
                ))} */}
                <Airport airports={searchFilter} />
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
