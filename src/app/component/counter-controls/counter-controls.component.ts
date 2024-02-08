import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMessage } from 'src/app/ngrx-state/counter-selector';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  @Output() incrementCounter = new EventEmitter<void>();
  @Output() decrementCounter = new EventEmitter<void>();
  @Output() resetCounter = new EventEmitter<void>();
  @Output() customCounter = new EventEmitter<any>();
  value!: number;
  message!: string;
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  ngOnInit() {
    this.store.select(getMessage).subscribe((data: any) => {
      console.log(data, 'from controllers');
      this.message = data;
    });
  }
  increment() {
    this.incrementCounter.emit();
  }
  reset() {
    this.resetCounter.emit();
  }
  decrement() {
    this.decrementCounter.emit();
  }
  custom() {
    this.customCounter.emit(this.value);
  }
}
