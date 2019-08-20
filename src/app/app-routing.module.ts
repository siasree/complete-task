import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { ReferComponent } from './refer/refer.component';

const routes: Routes = [
  {
    path: 'currentopenings',
    component: CurrentopeningsComponent
  },
  {
    path: 'refer',
    component: ReferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
