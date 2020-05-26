import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dataForChild = "Test value from Parent"
  public getChildData :string;

  getDataFromChild(value){
    this.getChildData = value;
  }
}
