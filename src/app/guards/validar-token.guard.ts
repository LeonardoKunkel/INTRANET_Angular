import { AuthService } from './../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor( private auth: AuthService,
               private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.auth.validarToken()
            .pipe(
              tap( valid => {
                if ( !valid ) {
                  this.router.navigateByUrl('/auth');
                }
              })
            );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.auth.validarToken()
            .pipe(
              tap( valid => {
                if ( !valid ) {
                  this.router.navigateByUrl('/auth');
                }
              })
            );
  }
}
