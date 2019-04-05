import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Router page
import { AppRoutingModule } from './app-routing.module';

// librerias Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// servicios
import {NotificationService } from './servicios/notification.service';

// Compinentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeardComponent } from './components/heard/heard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
