import { Component } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decreaseCounter,
  fetchCounter,
  increaseCounter,
  increaseDecreaseCustom,
  resetCounter,
} from 'src/app/ngrx-state/counter-action';
import { getCounter } from 'src/app/ngrx-state/counter-selector';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent {
  counter$ !: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {}
  ngOnInit() {
    this.counter$ = this.store.select(getCounter)
  }

  incrementCounterParent() {
    this.store.dispatch(increaseCounter());
  }
  decrementCounterParent() {
    this.store.dispatch(decreaseCounter());
  }
  resetCounterParent() {
    this.store.dispatch(resetCounter());
  }
  customParentIncrease(data: any) {
    console.log(data);
    this.store.dispatch(increaseDecreaseCustom({ value: data }));
  }
}
