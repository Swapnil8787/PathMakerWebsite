import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent {
  clickEvent(number:any){
    HeaderComponentComponent.status = number;       
}
}
