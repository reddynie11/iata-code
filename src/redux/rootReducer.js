import { airportData} from '../data';

const rootReducer = (state=airportData,action)=>{
    console.log(state)
    switch (action.type){
        case 'SEARCH':
            return{
                state : state.filter(contact => contact.id.toLowerCase().includes(action.payload.toLowerCase()) ||
                      contact.city.toLowerCase().includes(action.payload.toLowerCase()) ||
                      contact.country.toLowerCase().includes(action.payload.toLowerCase()))
               
            }
        default:
            return state
    }

}

export default rootReducer;