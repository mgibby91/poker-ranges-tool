import { createRangesArray, RangesProperties } from '../../utils';
import {
  CREATE_RANGES,
  RangesDispatchTypes,
} from '../actions/ranges-action.types';

interface DefaultStateI {
  range: RangesProperties[][];
}

const defaultState: DefaultStateI = {
  range: createRangesArray(),
};

const rangesReducer = (
  state: DefaultStateI = defaultState,
  action: RangesDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case CREATE_RANGES:
      return {
        ...state,
        range: action.payload,
      };
    default:
      return state;
  }
};

export default rangesReducer;
