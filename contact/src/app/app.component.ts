import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' contact manager';
  visible = false;
  makevisible(){
    if(this.visible == false)
    this.visible= true;
    else
    this.visible= false;

  }
}
