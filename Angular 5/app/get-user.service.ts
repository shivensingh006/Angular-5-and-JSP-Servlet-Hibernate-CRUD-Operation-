import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Injectable()
export class GetUserService {
  constructor(public http:Http) { }

  //Get list
  getPhone():Observable<any>{
   return this.http.get("http://localhost:8085/Servlet/service").pipe(
    map(data=>data.json()),
   )

  }
  
  //Get edit form to update data
  private httpOptions;
  getEditPhone(id):Observable<any>{
    this.httpOptions = {
      params: {'id': id, 'actionEdit':'edit'}
    };
    return this.http.get("http://localhost:8085/Servlet/edit", this.httpOptions).pipe(
     map(data=>data.json()),
    )
   }

   // Delete 
   deletePhone(id):Observable<any>{
    this.httpOptions = {
      params: {'id': id, 'actiondelete':'yes'}
    };
    return this.http.get("http://localhost:8085/Servlet/delete", this.httpOptions).pipe(
     map(data=>data.json()),
    )
   }

   //update
   updatePhone(data):Observable<any>{
    this.httpOptions = {
      params: {'actionUpdate':'yes', 'id':data.id, 'MacAddress':data.macaddress, 'IPAddress':data.IPAddress,'Model':data.Model, 'Firmware':data.Firmware}
    };
    return this.http.get("http://localhost:8085/Servlet/update", this.httpOptions).pipe(
     map(data=>data.json()),
    )
   }

   //Add New list
   addNewPhone(data):Observable<any>{
    this.httpOptions = {
      params: {'actionAdd':'yes', 'MacAddress':data.macaddress, 'IPAddress':data.IPAddress,'Model':data.Model, 'Firmware':data.Firmware}
    };
    return this.http.get("http://localhost:8085/Servlet/insert", this.httpOptions).pipe(
     map(data=>data.json()),
    )
   }

}
