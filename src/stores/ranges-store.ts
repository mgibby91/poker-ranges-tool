import { action, makeAutoObservable, observable } from 'mobx';
import { createRangesArray, PlayType, RangesProperties } from '../utils';

type UserRange = {
  title: string;
  range: RangesProperties[][];
};

export class RangesStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable newRange: RangesProperties[][] = createRangesArray();
  @observable userRanges: UserRange[] = [];

  @action updateNewRange = (rowIndex: number, cellIndex: number) => {
    const currentCell = this.newRange[rowIndex][cellIndex];
    currentCell.playType =
      currentCell.playType === PlayType.Fold ? PlayType.Play : PlayType.Fold;
  };

  @action addNewUserRange = (title: string) => {
    this.userRanges.push({ title, range: this.newRange });
  };

  @action resetNewRange = () => (this.newRange = createRangesArray());
}
