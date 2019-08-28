import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { StatusPipe } from '../status.pipe';
import { FormsModule } from '@angular/forms';
import { MaxValueDirective } from '../custom_directives/max-value.directive';






@NgModule({
  declarations: [StarComponent,StatusPipe,MaxValueDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[StarComponent,StatusPipe,MaxValueDirective]
})
export class SharedModule { }
