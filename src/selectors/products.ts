import { State } from "../store";

export function productsLoadingSelector(state: State) {
  return state.products.loading;
}

export function productsSelector(state: State) {
  const normalizedProducts = state.products.products;
  return Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid]);
}
