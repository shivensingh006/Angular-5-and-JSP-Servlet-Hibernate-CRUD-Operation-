import { Component, OnInit } from '@angular/core';
import { GetUserService} from '../get-user.service';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  providers: [GetUserService]
})
export class PhoneComponent implements OnInit {

  addClass = "display";
  constructor(private getUserService:GetUserService) { }

  public searchResult;

  ngOnInit() {
    this.getUserService.getPhone().subscribe(result=>{
      this.searchResult = result;
      console.log(this.searchResult);
    });
    
   }

   deleteUser($event, id){
    $event.target.parentElement.parentElement.className= "hide";
    this.getUserService.deletePhone(id).subscribe(result=>{
      this.searchResult = result;
    }); 

   }



}
