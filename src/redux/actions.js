import axios from "axios";



export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'



export const addFavorite = (character) =>{
    /* return{
        type : ADD_FAV,
        payload : character
    } */
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return (dispatch) => {
            axios.post(endpoint, character).then(({ data }) => {
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                });
            });
        };
}
export const removeFavorite = (id) =>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return (dispatch) => {
            axios.delete(endpoint).then(({ data }) => {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                });
            });
        };
}

export const filterCards = (gender) =>{
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER,
        payload:id
    }
}