import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import { Action } from "../actions";
import {
  LOAD_ORDERS,
  ORDERS_LOADED,
  ORDER_DETAIL_LOADED,
} from "../actions/orders";
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

function ordersReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;

        const orderArr = action.payload;

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(orderArr, [orderEntity]);

        draft.orders = data.entities.orders!;
      });
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(order, orderEntity);

        draft.orders[order.id] = data.entities.orders![order.id];
      });
    default:
      return state;
  }
}

export default ordersReducer;
