import * as actionTypes from '../actions';

const initialState = {
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // DONT USE PUSH! IT MUTATES THE ORIGINAL OBJECT!
                results: state.results.concat({ id: Math.random(), value: action.result }),
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(item => item.id !== action.id),
            }
        default:
            return state;
    }
};

export default reducer;