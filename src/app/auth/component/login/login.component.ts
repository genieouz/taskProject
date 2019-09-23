import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: { username: string; password: string } = {
    username: "",
    password: ""
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.userLogin).subscribe(
      (user: IUser) => {
        console.log(user);
      },
      (error: { status: string; message: any }) => {
        console.log(error);
      }
    );
  }
}
