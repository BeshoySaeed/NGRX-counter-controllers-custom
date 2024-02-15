import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMessage } from 'src/app/ngrx-state/counter/counter-selector';

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
  message$!: Observable<string>;
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  ngOnInit() {
    this.message$ = this.store.select(getMessage);
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
