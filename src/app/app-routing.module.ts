import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { ReferComponent } from './refer/refer.component';
import { SelfserviceComponent } from './selfservice/selfservice.component';
import { EngageComponent } from './engage/engage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'selfservice',
    component: SelfserviceComponent
  },
  {
    path: 'engage',
    component: EngageComponent,
    children: [
      {
        path: 'engage/currentopenings',
        component: CurrentopeningsComponent
      },
      {
        path: 'engage/refer',
        component: ReferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
