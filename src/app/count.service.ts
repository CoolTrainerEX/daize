import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private count: number;
  private countObservable: BehaviorSubject<number>;

  public constructor() {
    this.count = 0;
    this.countObservable = new BehaviorSubject<number>(this.count);
  }

  public get getCount(): BehaviorSubject<number> {
    return this.countObservable;
  }

  public addCount() {
    this.count++;
    this.countObservable.next(this.count);
  }
}
