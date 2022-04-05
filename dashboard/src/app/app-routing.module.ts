import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    },  {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'payment',
      component: PaymentComponent
    }, {
      path: 'personal',
      component: PersonalComponent
    },]
  }];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }