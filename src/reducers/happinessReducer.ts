import produce from "immer";
import { AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED } from "../actions/mood-actions";
import { Moment } from "../store";

export type HappyState = {
  happyMoments: Moment[];
};

export const initialHappyState: HappyState = {
  happyMoments: [],
};

function happinessReducer(
  currentHappyState = initialHappyState,
  action: AnyAction
) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return produce(currentHappyState, (draft) => {
        draft.happyMoments.push(action.payload);
      });

    default:
      return currentHappyState;
  }
}

export default happinessReducer;
