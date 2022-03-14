import { action, makeAutoObservable, observable } from 'mobx';
import { createRangesArray, PlayType, RangesProperties } from '../utils';

export class RangesStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable defaultRange = createRangesArray();
  @observable newRange: RangesProperties[][] = [];

  @action createNewRange = () => {
    this.newRange = this.defaultRange;
  };

  @action updateNewRange = (rowIndex: number, cellIndex: number) => {
    const currentCell = this.newRange[rowIndex][cellIndex];
    currentCell.playType =
      currentCell.playType === PlayType.Fold ? PlayType.Play : PlayType.Fold;
  };
}
