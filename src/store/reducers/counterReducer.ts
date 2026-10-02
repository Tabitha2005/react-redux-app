import type { UnknownAction } from "redux";
import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer = (
  state: CounterState = initialState,
  action: UnknownAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return { value: 0 };
    default:
      return state;
  }
};
