import { ADD_FAV , REMOVE_FAV , FILTER , ORDER} from "./actions";

let initialState = {
    myFavorites : [],
    allCharacters :[]

}

const  rootReducer = (state= initialState , action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites :[...state.myFavorites , action.payload],
                allCharacters: [...state.allCharacters , action.payload]
            }

        case REMOVE_FAV:
            const remove = state.myFavorites.filter(
                (characters) => characters.id !== Number(action.payload)
            );
            return {
                ...state,
                myFavorites: [...remove],
            }
        
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload)
            return{
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            return{
                ...state,
                myFavorites: 
                action.payload === 'Ascendente'
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }

        default:
            return{
                ...state
            }
    }
}

export default rootReducer;