import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';
import { PhoneComponent } from './phone/phone.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent, TestComponent, PhoneComponent, EditComponent, AddNewComponent], 
  imports: [
  	RouterModule.forRoot([
    {path:'', component:TestComponent}, //I added ParentComponent in router for home page
    {path:'phone', component:PhoneComponent},
    { path: 'edit-user/:id', component: EditComponent },
    { path: 'add-new', component: EditComponent }
    ]),
    ReactiveFormsModule, 
    BrowserModule,
  HttpModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
