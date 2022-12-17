import { ActionCreator } from "./index";
import { Moment } from "../store";

export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = "sad button clicked";

export const happyButtonClicked: ActionCreator<Moment> = (
  intensity: number,
  when: Date
) => ({
  type: HAPPY_BUTTON_CLICKED,
  payload: { intensity, when },
});

export const sadButtonClicked: ActionCreator<Moment> = (
  intensity: number,
  when: Date
) => ({
  type: SAD_BUTTON_CLICKED,
  payload: { intensity, when },
});
