export const searchTerm = (term)=>{
    console.log(term)
    return{
        type : 'SEARCH',
        payload : term
    }
}