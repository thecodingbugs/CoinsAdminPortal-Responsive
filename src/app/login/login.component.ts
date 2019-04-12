import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementComponent } from 'app/user-management/user-management.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  OnLogin(){
    this._router.navigate(['home']);
  }

}
