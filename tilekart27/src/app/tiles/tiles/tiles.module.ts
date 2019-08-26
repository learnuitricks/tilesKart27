import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesComponent } from '../tiles.component';
import { TileComponent } from '../tile/tile.component';
import { TileDetailComponent } from '../tile-detail/tile-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [TilesComponent,TileComponent,TileDetailComponent],
  imports: [
    CommonModule,
    TilesRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TilesModule { }
