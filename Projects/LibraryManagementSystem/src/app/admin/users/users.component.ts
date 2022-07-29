import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
//  users=[
//   {
//     id:1,
//     profile:"../assets/profile.png",
//     name:"Name"
//   },
//   {
//     id:2,
//     profile:"../assets/profile.png",
//     name:"Name"
//   },
//   {
//     id:3,
//     profile:"../assets/profile.png",
//     name:"Name"
//   }

//  ]

 public users:object=[];
 constructor(private apiService:ApiService) { }

 ngOnInit(): void {
   this.getUsers()
 }

 getUsers(){
  this.apiService.get('http://192.168.0.156/boilerplate/api/web/v1/libmag/seealluser')
  .subscribe((res : any) => {
    this.users = res.data;
   
   console.log(res)
});
 }

 



}
function data(data: any, arg1: any, arg2: any) {
  throw new Error('Function not implemented.');
}

