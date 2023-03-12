import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent {
  clickEvent(number:any){
    HeaderComponentComponent.status = number;       
  }
}
