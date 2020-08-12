import {SEARCH__MOVIE} from './types';
export const searchMovie= text =>dispatch=> {
    dispatch({
        type:SEARCH__MOVIE,
        payload: text
    })

} 