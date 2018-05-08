import { takeEvery, all, takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authUserSaga,
    authCheckStateSaga
} from './auth'
import {
    initIngredientsSaga,
} from './burgerBuilder'
import {
    purchaseBurgerSaga,
    fetchOrderSata,
} from './order'


export function* watchAuth() {
    // yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    // yield takeEvery(actionTypes.AUTH_CHECK_TIMOUT, checkAuthTimeoutSaga)
    // yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
    // yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    yield all([ // Everythin here will be run simultaneously
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    ])
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder() {
    // yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
    // This will cancel any saga that is running if the saga is called again.
    // if the user click twice on the button, it will execute only the last click
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrderSata)
}