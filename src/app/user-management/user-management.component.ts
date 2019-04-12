import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  private btnText: String = "New";
  public Users: IUser[];
  public totalRecords: number = 0;
  public selectedUsers: IUser[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {
    this.httpClient.get("http://localhost:3000/user/all").subscribe(
      (data: IUser[]) => {
        this.Users = data;
        this.totalRecords = this.Users.length;
        console.log(data);
      });

  }

  ngOnInit() {
  }

  AddUser() {
    this.router.navigate(['/user/new']);
  }

  OnRowSelect(ev: any, id: number) {
    if (ev.checked) {
      let selectedRow = this.Users.find(user => user.Id == id);
      this.selectedUsers.push(selectedRow);
    } else {
      let index = this.selectedUsers.findIndex(user => user.Id == id);
      this.selectedUsers.splice(index, 1);
    }    
    this.btnText = this.selectedUsers.length == 1 ? "Edit" : "New";
  }

  DeleteUsers() {

  }
}

export interface IUser {
  Id: number;
  FirstName: string;
  Email: string;
  Password: string;
  ContactNumber: string;
  AltContactNumber: string;
  AltEmail: string;
  CreatedOn: Date;
  IsActive: boolean;
  LastName: string;
  Username: string;
  ModifiedBy: string;
}