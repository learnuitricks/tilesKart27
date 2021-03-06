import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
})
export class UsersModule { }
