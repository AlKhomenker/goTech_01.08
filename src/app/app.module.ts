import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HttpClientModule } from "@angular/common/http";

import { UserCard } from "./Components/UserCard/UserCard.component";
import { UserList } from "./Components/UserList/UserList.component";
import { Pagination } from "./Components/Pagination/Pagination.component";

import { UserService } from "./Services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserCard,
    UserList,
    Pagination
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
