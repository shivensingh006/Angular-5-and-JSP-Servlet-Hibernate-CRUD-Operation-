import { Component, OnInit } from '@angular/core';
import { GetUserService} from '../get-user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [GetUserService]
})
export class TestComponent implements OnInit {

  constructor(private getUserService:GetUserService, ) { }

  public result;
  


  public searchResult;

  ngOnInit() {
    this.getUserService.getPhone().subscribe(result=>{
      this.searchResult = result;
      console.log(this.searchResult);
    });
    
   }


 

   color:string = 'red';
  changeStyle($event){
    console.log($event);
    //$event.target.className= $event.target.className == 'red' ? 'yellow' : 'red';
    $event.target.className = $event.type == 'mouseover' ? 'yellow' : 'red';
  }

  public name:string= "ABCD";

  disabled = false;

  transferDatatoComp(){
    //Change the value of name on click
    this.name="XYZ - From event";

  }
}
