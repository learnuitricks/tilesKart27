import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


import { WelcomeComponent } from './welcome/welcome.component';

import { MaxValueDirective } from './shared/custom_directives/max-value.directive';
import { UsersModule } from './users/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MaxValueDirective
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
