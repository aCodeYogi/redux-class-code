import produce from "immer";
import { AnyAction } from "redux";
import { SAD_BUTTON_CLICKED } from "../actions/mood-actions";
import { Moment } from "../store";

export type State = {
  sadMoments: Moment[];
  thingsThatMakeYouSad: string[];
};

export const initialState: State = {
  sadMoments: [],
  thingsThatMakeYouSad: ["Slow internet"],
};

function reducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(state, (draft) => {
        draft.sadMoments.push(action.payload);
      });

    default:
      return state;
  }
}

export default reducer;

const a = {
  name: "suresh",
  bestFriends: ["ramesh, jignesh"],
  hobbies: ["coding", "reading books"],
};

// const b = JSON.parse(JSON.stringify(a)); // deep copy
// b.hobbies.push("dacing");

// const c = { ...a }; // shallow copy
// c.hobbies.push("dancing");

// const d = a; // no new copy at all
// // d.hobbies.push("dancing");

const e = produce(a, (draft) => {
  draft.hobbies.push("dancing");
});

const f = { ...a, hobbies: [...a.hobbies, "dancing"] };

// console.log(
//   "a and b",
//   a == b,
//   a.bestFriends == b.bestFriends,
//   a.hobbies == b.hobbies
// );
// console.log(
//   "a and c",
//   a == c,
//   a.bestFriends == c.bestFriends,
//   a.hobbies == b.hobbies
// );

// console.log(
//   "a and d",
//   a == d,
//   a.bestFriends == d.bestFriends,
//   a.hobbies == b.hobbies
// );

console.log(
  "a and e",
  a == e,
  a.bestFriends == e.bestFriends,
  a.hobbies == e.hobbies
);
