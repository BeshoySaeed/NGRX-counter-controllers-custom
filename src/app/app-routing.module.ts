import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';

const routes: Routes = [
  {
    path: '',
    component: CounterDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
