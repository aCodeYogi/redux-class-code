import produce from "immer";
import { AnyAction } from "redux";
import {} from "../actions";
import { LOAD_ORDERS, ORDERS_LOADED } from "../actions/orders";
import Order from "../models/Order";

type NormalizedOrder = { [id: number]: Order };

export type State = {
  loading: boolean;
  orders: NormalizedOrder;
};

export const initialState: State = {
  loading: false,
  orders: {},
};

function ordersReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;

        const orderArr = action.payload;

        const normalizedOrders = orderArr.reduce(function (
          previous: NormalizedOrder,
          current: Order
        ) {
          return { ...previous, [current.id]: current };
        },
        {});

        draft.orders = normalizedOrders;
      });
    default:
      return state;
  }
}

export default ordersReducer;
