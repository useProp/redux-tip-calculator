import { rootReducer as reducer, initialState } from '../reducers';
import { ActionTypes } from '../actions';

const testState = initialState;

describe('reducer test', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {
      type: ActionTypes.Reset
    })).toEqual(testState)
  });

  it('should set bill to a number', () => {
    const payload = 100;
    expect(reducer(testState, {
      type: ActionTypes.BillChange,
      payload: String(payload)
    }).bill).toEqual(payload)
  });

  it('should set bill to a decimal', () => {
    const payload = 10.5;
    expect(reducer(testState, {
      type: ActionTypes.BillChange,
      payload: String(payload)
    }).bill).toEqual(payload)
  });

  it('should not set bill to a string', () => {
    const payload = 'q';
    expect(reducer(testState, {
      type: ActionTypes.BillChange,
      payload: String(payload)
    }).bill).not.toEqual(payload)
  });

  it('should set percentage to a number', () => {
    const payload = 100;
    expect(reducer(testState, {
      type: ActionTypes.PercentageChange,
      payload: String(payload)
    }).percentage).toEqual(payload)
  });

  it('should set percentage to a decimal', () => {
    const payload = 10.5;
    expect(reducer(testState, {
      type: ActionTypes.PercentageChange,
      payload: String(payload)
    }).percentage).toEqual(payload)
  });

  it('should not set percentage to a string', () => {
    const payload = 'q';
    expect(reducer(testState, {
      type: ActionTypes.PercentageChange,
      payload: String(payload)
    }).percentage).not.toEqual(payload)
  });
});
