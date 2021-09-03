import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../interfaces/users.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 100px;
    }
  `]
})
export class UserComponent implements OnInit {

  user!: Usuario;

  constructor( private activatedRoute: ActivatedRoute,
               private userService: UsersService,
               private router: Router) { }

  ngOnInit(): void {
  
    this.activatedRoute.params
      .pipe( switchMap( ({ id }) => this.userService.getUserById( id ) ) )
      .subscribe( data => this.user = data );
    
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
