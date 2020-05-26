import { Component, OnInit } from '@angular/core';
import { GetUserService} from '../get-user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [GetUserService]
})
export class EditComponent implements OnInit {

formGroup: FormGroup;

private sub: any;

public searchResult;
 public id;
  ngOnInit() {
   
      this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number
          // In a real app: dispatch action to load the details here.
      });
     if(this.id){
     this.getUserService.getEditPhone(this.id).subscribe(result=>{
      this.searchResult = result;
      this.formGroup = this.formBuilder.group({
        id: new FormControl(this.id),
        macaddress: new FormControl(result.Macaddress),
        IPAddress: new FormControl(result.Ipaddress),
        Model:new FormControl(result.Model),
        Firmware:new FormControl(result.Firmware),
      });
    }); 
  }else{
    console.log("add");
    this.searchResult = {id:'', macaddress:'', IPAddress:'', Model:'', Firmware:'',};
    this.formGroup = this.formBuilder.group({
      id: new FormControl(''),
      macaddress: new FormControl(''),
      IPAddress: new FormControl(''),
      Model:new FormControl(''),
      Firmware:new FormControl(''),
    });

  }
   }

constructor(
  private route: ActivatedRoute,
  private getUserService:GetUserService,
  private formBuilder: FormBuilder,
) {
}

url;
onSubmit(data) {
  console.log(data);
  if(data.id == null || data.id==''){
   this.url = this.getUserService.addNewPhone(data);
  }else{
    this.url = this.getUserService.updatePhone(data);
  }
  this.url.subscribe(result=>{
    this.searchResult = result}
    );
    if( this.searchResult != ""){
      window.location.href="/phone";
    }
  }


}
