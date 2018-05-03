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

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json?auth=' + token, orderData)
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

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  }
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  }
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  }
}

export const fetchOrders = (token, userId) => {
  return dispatch => { // It is possible to recieve the getState funcion!!!
    dispatch(fetchOrdersStart());
    const queryParams = '?auth=' + token // + '&orderBy="userId"&equalTo="' + userId + '"'; not working :(
    axios.get('orders.json' + queryParams)
      .then(
        res => {
          const fetchedOrders = [];
          for (let key in res.data) {
            fetchedOrders.push({
              ...res.data[key],
              id: key,
            });
          }
          dispatch(fetchOrdersSuccess(fetchedOrders));
        }
      ).catch(
        err => {
          dispatch(fetchOrdersFail(err));
        }
      );
  }
}