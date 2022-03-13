import { Dispatch } from 'redux';
import { RangesProperties } from '../../utils';
import { RangesDispatchTypes } from './ranges-action.types';

export const CreateRanges = (range: RangesProperties[][]) => {
  return (dispatch: Dispatch<RangesDispatchTypes>) => {
    dispatch({
      type: 'CREATE_RANGES',
      payload: range,
    });
  };
};
