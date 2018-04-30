import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaceBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  }
}

export const purchaseBugerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  }
}

export const purchaseBurgerStart = (orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
}

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
      .then(response => {
        dispatch(purchaceBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBugerFail(error));
      });
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  }
}