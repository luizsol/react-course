import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: [],
};

const deleteResult = (state, action) => {
    return updateObject(state, { results: state.results.filter(item => item.id !== action.id), });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                // DONT USE PUSH! IT MUTATES THE ORIGINAL OBJECT!
                results: state.results.concat({ id: Math.random(), value: action.result }),
            });
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;