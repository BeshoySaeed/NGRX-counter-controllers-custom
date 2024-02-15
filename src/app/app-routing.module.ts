import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: CounterDisplayComponent,
  },
  {
    path: 'posts',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
