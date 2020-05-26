import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Input() public name:String;

 @Output() sendDataToParent: EventEmitter<String> = new EventEmitter<string>();

 transferData(event){
  this.sendDataToParent.emit(event.target.value);

 }

}
