import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-functionalties',
  templateUrl: './functionalties.component.html',
  styleUrls: ['./functionalties.component.css']
})
export class FunctionaltiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  showUser() {
   // console.log(this.user);
    /*if(this.user.empId === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['show-services']);
    }*/
    this.router.navigate(['waterquality']);
   // this.router.navigate(['test']);
}
showUser1() {
  
   this.router.navigate(['contamination']);
}
}