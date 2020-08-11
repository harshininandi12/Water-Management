import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private router:Router, private service:EmpService) { 
    this.user = {userName:'',password:''};
  }
   ngOnInit() {
  }
  async validateUser(loginForm : any){
    if(loginForm.userName === 'admin' && loginForm.password === 'admin'){
      console.log(this.user);
      this.service.setUserLoggedIn();
      this.router.navigate(['functionalties']);
    } /*else {
      console.log(this.user);
      await this.service.getuser(loginForm.userName, loginForm.password).then((data : any) => {if(data != null){
      this.service.setUserLoggedIn();
      this.router.navigate(['home']);
     // toastr.success("Login","Login Success");
          //this.showw();
      } else {
        
       // this.showw1();
      }
    },
    (error) => {
     //this.toastr.success('Login Failure');
      this.router.navigate(['home']);
     // this.showw();
      });
  }*/
  }
  func() {
  
    this.router.navigate(['functionalties']);
 }
}