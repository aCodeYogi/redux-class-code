import produce from "immer";
import { AnyAction } from "redux";
import {} from "../actions";
import { ORDERS_LOADED } from "../actions/orders";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";
import Order from "../models/Order";
import Product from "../models/Proudct";

// Redux schema design
const myProudcts1 = {
  21: { id: 21, title: "iPhone", price: 220 },
  25: { id: 25, title: "Macbook", price: 299 },
};

const myProudcts2 = [
  { id: 21, title: "iPhone", price: 220 },
  { id: 25, title: "Macbook", price: 299 },
];

type NormalizedProducts = {
  [id: number]: Product;
};

type State = {
  products: NormalizedProducts;
  loading: boolean;
};

// normalize
const initialState: State = {
  products: {},
  loading: false,
};

function productsReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        const products = action.payload;
        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});

        draft.products = normalizedProducts;
        draft.loading = false;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        const orders = action.payload;
        const products = orders.reduce(function (
          previous: Product[],
          current: any
        ) {
          return [...previous, ...current.products];
        },
        []);

        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});

        draft.products = normalizedProducts;
      });
    default:
      return state;
  }
}

export default productsReducer;
