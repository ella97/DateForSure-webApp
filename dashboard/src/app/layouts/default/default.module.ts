import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PaymentComponent } from 'src/app/modules/payment/payment.component';
import { PersonalComponent } from 'src/app/modules/personal/personal.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    RegisterComponent,
    PersonalComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
  ]
})
export class DefaultModule { }
