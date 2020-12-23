import {Action, Reducer} from 'redux';
import {StoreState} from './index';
import { Actions, ActionTypes } from './actions';

export const initialState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer: Reducer<StoreState, Actions> = (
  state = initialState,
  action
  ) => {
  switch (action.type) {
    case ActionTypes.BillChange:
      return {
        ...state,
        bill: Number(action.payload)
      }
      break;
    case ActionTypes.PercentageChange:
      return {
        ...state,
        percentage: Number(action.payload)
      }
      break;
    case ActionTypes.SplitIncrement:
      return {
        ...state,
        split: state.split + 1
      }
      break;
    case ActionTypes.SplitDecrement:
      return {
        ...state,
        split: state.split > 1 ? state.split - 1 : 1
      }
      break;
    case ActionTypes.Reset:
      return initialState;
      break;
    default:
      return state;
  }
};
