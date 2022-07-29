import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formData: any = {}
 
  //   body= {
  //     u_name: "Ram",
  //     u_username: "ram@123",
  //     u_password: "ram111",
  //     u_email: "ram@gmail.com",
  //     u_phno: 98678
  // }
 
  // data = (JSON.stringify(this.body));
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
     this.createUser()
  }
  createUser() {
    this.apiService.post('http://192.168.0.156/boilerplate/api/web/v1/libmag/enteruser', this.formData)
      .subscribe((response: object) => {
        console.log(response);
      },err=>{
        // console.log(err)
      });
      
      console.log(this.formData)
  }
  // createUser(){
  //   console.log(this.formData)
  // }

}

