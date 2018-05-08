import {put} from 'redux-saga/effects'

import axios from '../../axios-orders';
import * as actions from '../actions/index'

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get('/ingredients.json')
        yield put(actions.setIngredientes(response.data));
    } catch(error) {
        yield put(actions.fetchIngredientsFailed());
    }
}