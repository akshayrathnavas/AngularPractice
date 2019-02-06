import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public task1 : String = "Sample 1";
  public color1 : String = "yellow"
  public items: any=[];
  public completedItems: any=[];
  public colorArray = ['red','green','blue','yellow','#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  public colorCodeDigits = ['0','A','B','C','D','E','F'];
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
    this.task1 = "Sample " + parseInt(this.items.length+1);
    //var rand = Math.floor(Math.random()*this.colorArray.length);        
    var rand1 = Math.floor(Math.random()*this.colorCodeDigits.length);
    var rand2 = Math.floor(Math.random()*this.colorCodeDigits.length);
    var rand3 = Math.floor(Math.random()*this.colorCodeDigits.length);
    var rand4 = Math.floor(Math.random()*this.colorCodeDigits.length);
    var rand5 = Math.floor(Math.random()*this.colorCodeDigits.length);
    var rand6 = Math.floor(Math.random()*this.colorCodeDigits.length);
    this.color1 = '#'+ this.colorCodeDigits[rand1] + this.colorCodeDigits[rand2] + 
                  this.colorCodeDigits[rand3] + this.colorCodeDigits[rand4] + this.colorCodeDigits[rand5] + this.colorCodeDigits[rand6];

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
