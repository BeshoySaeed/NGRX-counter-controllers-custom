import { Component, EventEmitter, Output } from '@angular/core';

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
