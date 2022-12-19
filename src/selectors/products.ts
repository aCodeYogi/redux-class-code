import { createSelector } from "reselect";
import { State } from "../store";

export function productsStateSelector(state: State) {
  return state.products;
}

export const productsLoadingSelector = createSelector(
  productsStateSelector,
  (productState) => productState.loading
);

export const productsMapSelector = createSelector(
  productsStateSelector,
  (productState) => productState.products
);

export const productsSelector = createSelector(
  productsMapSelector,
  (normalizedProducts) =>
    Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid])
);
