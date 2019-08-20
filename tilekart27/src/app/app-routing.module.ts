import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { TilesComponent } from './tiles/tiles.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'tiles',component:TilesComponent
  },
 
  {
    path:"register", component:RegisterComponent
  },
   {
    path:"tiles/:Id", component:TileDetailComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'',redirectTo:'register',pathMatch:'prefix'
  },
  {
    path:'**',redirectTo:'register',pathMatch:'prefix'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
