import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-nav-basic',
  standalone:true,
  imports: [NgbNavModule],
  templateUrl: './ngbd-nav-basic.html'
  
})
export class NgbdNavBasic {
 	active = 1;
   links = [
    { title: 'One', fragment: 'one' },
    { title: 'Two', fragment: 'two' }
  ];
  
  constructor(public route: ActivatedRoute) {}

}
