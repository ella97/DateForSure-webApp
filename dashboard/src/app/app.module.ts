import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './modules/register/register.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { PaymentComponent } from './modules/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PersonalComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule, 
    BrowserAnimationsModule, 
    // MatButtonModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
