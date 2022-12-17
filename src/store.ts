import { combineReducers, createStore } from "redux";
import happinessReducer from "./reducers/happinessReducer";
import ordersReducer from "./reducers/orders";
import productsReducer from "./reducers/products";
import sadnessReducer from "./reducers/sadnessReducer";

export type Moment = {
  intensity: number;
  when: Date;
};

// 1. reducer has to be non muntating i.e. hamesha naya object banao, purane mein change mat karo.
// 2. But bekar mein naya object bhi mat banana. Deep copy vaghera mat karna.
// 3. reducer has to be a pure function

// Follow naa karne pe kya dikaat hogi
// 1. jab refresh hona chahiye tab bhi refresh nahi hoga
// 2. unnessary refresh hoga
// 3. Live users ke bugs reproduce nahi kar paaoge.

const reducer = combineReducers({
  sad: sadnessReducer,
  happy: happinessReducer,
  products: productsReducer,
  orders: ordersReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// teaching, project managers
// coaching -> one to one

// sub reducers

//

// number[] | () => number[];
