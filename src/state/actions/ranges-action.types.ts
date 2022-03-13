import { RangesProperties } from '../../utils';

export const CREATE_RANGES = 'CREATE_RANGES';

export interface CreateRanges {
  type: typeof CREATE_RANGES;
  payload: RangesProperties[][];
}

export type RangesDispatchTypes = CreateRanges;
