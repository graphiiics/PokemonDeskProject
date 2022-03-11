
function favoritesReducer(state, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, {
                id: action.pokemon.id,
                name: action.pokemon.name,
                img: action.pokemon.img
            }]
        case 'REMOVE_FAVORITE':
            return state.filter(pokemon => pokemon.id !== action.id);
        // case 'IS_FAVORITE':
        //     console.log('[state]', state );
            
        //     return state.filter(pokemon => pokemon.id === action.id).length > 0;
        default:
            return state;
    }
}

export default favoritesReducer
