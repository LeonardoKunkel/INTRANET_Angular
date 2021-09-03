import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Auth, User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.baseUrl;
  private _user!: User;
  
  get user() {
    return this._user;
  }



  constructor( private http: HttpClient ) { }
  
  login( correo: string, password: string ) {
    
    const url = `${this.url}/auth/login`;
    const body = { correo, password };
    
    return this.http.post<Auth>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }



  validarToken(): Observable<boolean> {
  
    const url = `${ this.url }/auth/renew`;
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '' );
    
    
    return this.http.get<Auth>( url, { headers } )
      .pipe(
        map( resp => {

          return resp.ok;
        
        }),
        catchError( err => of(false) )
      );
  
  }



  logout() {
    localStorage.clear();
  }

}
