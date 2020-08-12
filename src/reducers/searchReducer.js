import { SEARCH__MOVIE } from '../actions/types';
const initialState = {
    text: '',
    movies : [],
    loading: false,
    movie: []

}

export default function (state = initialState, action) {
    switch (action.type){
        case SEARCH__MOVIE : 
        return{
            ...state,
            text : action.payload,
            loading: false
        }
        default :
        return state
        
    }
}