import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('access_token_wood');

    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }

    if(this.jwtHelper.isTokenExpired(token)) {
      this.authService.logout();
    }
  }

}
