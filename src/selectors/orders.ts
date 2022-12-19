import { createSelector } from "reselect";
import Product from "../models/Proudct";
import { State } from "../store";
import { productsMapSelector } from "./products";

// top level selector
export function orderStateSelector(state: State) {
  return state.orders;
}

export const ordersLoadingSelector = createSelector(
  orderStateSelector,
  function (orderState) {
    return orderState.loading;
  }
);

export const ordersMapSelector = createSelector(
  orderStateSelector,
  (orderSate) => orderSate.orders
);

export const ordersSelector = createSelector(
  ordersMapSelector,
  (normalizedOrders) =>
    Object.keys(normalizedOrders).map((orderId) => normalizedOrders[+orderId])
);

export const ordersProductsSelector = createSelector(
  ordersMapSelector,
  productsMapSelector,
  (orderMap, productsMap) =>
    Object.keys(orderMap).reduce<{
      [orderId: number]: Product[];
    }>((previous, currentOrderId) => {
      const order = orderMap[+currentOrderId];
      const products = order.products.map((pid) => productsMap[pid]);
      return { ...previous, [currentOrderId]: products };
    }, {})
);

// selector is function which take just whole state object and returns some data from.
// selector can't take any other parameter except state.
