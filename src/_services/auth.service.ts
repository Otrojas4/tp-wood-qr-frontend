import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DecodedToken } from 'src/_models/decoded-token';
import { LoginForm } from 'src/_models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  decodedToken: DecodedToken;

  constructor(private http: HttpClient, private router: Router) { }


  login(login: LoginForm) {
    return this.http.post(`${environment.backendUrlMain}/user/login`, login).pipe(
        map((response: any) => {
          const res = response;
          if (res) {
            const tokenToStore = res.token.replace('Bearer ','');
            localStorage.setItem('access_token_wood', tokenToStore);
            this.decodedToken = this.jwtHelper.decodeToken(res.token);
            this.router.navigate(['']);
          }
        })
    );
  }

  loggedIn(): boolean {
    return localStorage.getItem('access_token_wood') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('access_token_wood');
    this.router.navigate(['']);
  }

  isAdmin(): boolean {
    return this.decodedToken.authorities.some(x => x === 'ROLE_ADMIN');
  }

}
