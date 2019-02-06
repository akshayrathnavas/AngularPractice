import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public task1 : String = "Sample";
  public color1 : String = "yellow"
  public items: any=[];
  public completedItems: any=[];
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
    console.log(this.items);
  }
  enterEvent(event){
    if(event.keyCode=='13'){
      this.addTask();
    }
  }
  doneTask(index){
    if(this.items.length==1 &&  index=='0'){
      this.completedItems.push(this.items[index]);
      this.items=[];
      return;
    }
    else if(index=='0'){
      this.completedItems.push(this.items[index]);
      this.items.splice(0,1);
      return;
    }
    console.log(index);
    console.log("length "+ this.items.length);
    console.log(this.items[index]);
    this.completedItems.push(this.items[index])
    this.items.splice(index,index);
  }

}
