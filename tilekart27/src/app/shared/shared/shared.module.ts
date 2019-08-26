import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { StatusPipe } from '../status.pipe';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [StarComponent,StatusPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[StarComponent,StatusPipe]
})
export class SharedModule { }
