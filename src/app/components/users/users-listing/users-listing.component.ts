import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  table: any = [];

  constructor(
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users.getAllUsers().subscribe(res => {
      this.table = res;
      console.log(res);
    },
    (error: any) => {
      console.log(error);
    })
  }

}
