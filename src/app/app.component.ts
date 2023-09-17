import { Component } from '@angular/core';
//metadata
@Component({//decorator
  selector: 'app-root',//component directive
  templateUrl: './app.component.html',//path to html file for that component
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title: string = 'meanstackg3';
  sum(): number {
    return 5;
    
  }
  
}
