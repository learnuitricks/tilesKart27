import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tilekart27';
  name= 'kumar';
  employee = {
    name:'kumar',
    age:24,
    married:false
  }
}
