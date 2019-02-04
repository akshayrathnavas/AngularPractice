import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class COmp2Component {
  title = 'Proj1';
  clickCount = 0; 

  add() { 
     this.clickCount++;
  } 


}
