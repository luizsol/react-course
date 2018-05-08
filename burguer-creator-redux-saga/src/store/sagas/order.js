import { put } from 'redux-saga/effects'

import axios from '../../axios-orders';
import * as actions from '../actions/index'

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());
    try {
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(actions.purchaceBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBugerFail(error));
    }
}

export function* fetchOrderSata(action) {
    yield put(actions.fetchOrdersStart());
    const queryParams = '?auth=' + action.token // + '&orderBy="userId"&equalTo="' + userId + '"'; not working :(
    try {
        const response = yield axios.get('orders.json' + queryParams)
        const fetchedOrders = [];
        for (let key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key,
            });
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}