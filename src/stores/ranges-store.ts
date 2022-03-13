import { makeAutoObservable } from 'mobx';

export class RangesStore {
  constructor() {
    makeAutoObservable(this);
  }
}
