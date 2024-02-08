import { Component } from '@angular/core';
import { Store, props } from '@ngrx/store';
import {
  decreaseCounter,
  fetchCounter,
  increaseCounter,
  increaseDecreaseCustom,
  resetCounter,
} from 'src/app/ngrx-state/counter-action';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css'],
})
export class CounterDisplayComponent {
  counter!: number;

  constructor(private store: Store<{ counter: number }>) {}
  ngOnInit() {
    this.store.dispatch(fetchCounter());
    this.store.select('counter').subscribe((data: any) => {
      this.counter = data.counter;
    });
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
