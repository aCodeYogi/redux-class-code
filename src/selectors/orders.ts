import { State } from "../store";

export function ordersLoadingSelector(state: State) {
  return state.orders.loading;
}

export function ordersSelector(state: State) {
  const normalizedOrders = state.orders.orders;

  const orderArr = Object.keys(normalizedOrders).map(
    (orderId) => normalizedOrders[+orderId]
  );

  return orderArr;
}
