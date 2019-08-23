import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './users/login/login.component';
import { StatusPipe } from './shared/status.pipe';
import { TileComponent } from './tiles/tile/tile.component';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';
import { RegisterComponent } from './users/register/register.component';
import { MaxValueDirective } from './shared/custom_directives/max-value.directive';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent,
    MaxValueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
