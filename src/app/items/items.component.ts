import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public task1 : String = "Sample";
  public color1 : String = "blue"
  public items: any=[];
  constructor() { 
  }

  ngOnInit() {
  }

  addTask(){
    console.log(this.task1);
    console.log(this.color1);
    var obj1 = {
        "task":this.task1,
        "color":this.color1
    };
    this.items.push(obj1);
  }

}
