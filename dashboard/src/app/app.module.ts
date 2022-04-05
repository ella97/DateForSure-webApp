import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
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
