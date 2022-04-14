import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  createUser() {
    let data = this.programForm.value;

    this.users.addNewUser(data).subscribe(res => {
      console.log(res);
    },
    (error: any) => {
      console.log(error);
    })
  }
}
