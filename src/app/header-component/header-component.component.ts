import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  static status:any = 0;
  clickEvent(number:any){
    HeaderComponentComponent.status = number;       
  }
  checkstatus(){
    return HeaderComponentComponent.status;
  }
}
