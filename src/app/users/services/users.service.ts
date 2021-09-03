import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario, Welcome } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }
  
  getUsers(): Observable<Welcome[]> {
    return this.http.get<Welcome[]>(`${ this.url }/usuarios`);
  }
  
  getUserById( id: string ):Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuarios/${ id }`);
  }

  getSuggestion( term: string ) {
    return this.http.get<Welcome[]>(`${ this.url }/usuarios?q=${ term }&_limite=5`);
  }
  
  postUser( user: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(`${ this.url }/usuarios`, user);
  }
}
