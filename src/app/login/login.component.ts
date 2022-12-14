import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin()
  {
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/produits']);
else
this.erreur=1;
  }
}
