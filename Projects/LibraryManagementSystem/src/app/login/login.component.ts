import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/apiService/api.service';
// import { ApiService } from '../service/apiService/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice:ApiService) { }
  
login:any=[]
  ngOnInit(): void {
    // localStorage.setItem("name","chandu")
    // alert(localStorage.getItem("name"))
    this.user();
    
  }
user(){
  this.apiservice.post('http://192.168.0.114/training_api/api/web/v1/book/loginpage',this.login)
    .subscribe((res:any)=>{
      console.log(res)
      
    });

    alert(JSON.stringify(this.login))
    // localStorage.setItem("details", this.login);
    // var data=localStorage.getItem("details");
    // console.log(data)
  //   localStorage.setItem("user",JSON.stringify(this.login))
  //  alert(JSON.parse(localStorage.getItem("user")))


}
}


