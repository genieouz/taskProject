import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: IUser = {
    prenom: "",
    nom: "",
    username: "",
    password: ""
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.user).subscribe(
      (user: IUser) => {
        console.log(user);
      },
      (error: { status: string; message: any }) => {
        console.log(error);
      }
    );
  }
}
