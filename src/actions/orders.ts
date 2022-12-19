import { ActionCreator } from ".";
import Order from "../models/Order";

export const LOAD_ORDERS = "LOAD_ORDERS";

export const loadOrdersAction: ActionCreator = () => ({
  type: LOAD_ORDERS,
});

export const ORDERS_LOADED = "ORDERS_LOADED";

export const ordersLoadedAction: ActionCreator<Order[]> = (
  orders: Order[]
) => ({
  type: ORDERS_LOADED,
  payload: orders,
});

export const ORDER_DETAIL_LOADED = "ORDER_DETAIL_LOADED";

export const orderDetailLoadedAction: ActionCreator<Order> = (order: Order) => ({
  type: ORDER_DETAIL_LOADED,
  payload: order,
});
