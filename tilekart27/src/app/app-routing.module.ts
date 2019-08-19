import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { TilesComponent } from './tiles/tiles.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'tiles',component:TilesComponent
  },
  {
    path:"tiles/:Id", component:TileDetailComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'',redirectTo:'login',pathMatch:'prefix'
  },
  {
    path:'**',redirectTo:'login',pathMatch:'prefix'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
