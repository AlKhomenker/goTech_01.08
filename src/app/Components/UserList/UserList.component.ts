import {Component, OnChanges, OnInit} from '@angular/core';
import { UserService } from "../../Services/user.service";
import { User } from "../../Shared/User/user.class";


@Component({
  selector: 'app-userList',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.css']
})
export class UserList implements OnInit{

  datalist: any = [];
  userslist: any = [];
  currentIndex: number = 0;
  lastIndex: number = this.currentIndex + 5;

  constructor( private userService: UserService) {}


  ngOnInit() {
    this.getData();
  }


  public onDataChange(pageNum: number): void {
    this.currentIndex = pageNum * 5 - 5;
    this.lastIndex = pageNum * 5;
  }

 public getData(){
   this.userService.getData().subscribe(
     (res) => {
       console.log('response received')
       this.datalist = res
       this.changeData(res);
     },
     (err) => {
       console.error(err)
     })
 }

  public changeData(data: any){
    data.map((item:any) => {
      let user = new User(item.name, item.department, item.address, item.image);
      this.userslist.push(user);
    });
  }

}


