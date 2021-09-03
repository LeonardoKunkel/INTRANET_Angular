import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Usuario, Welcome } from '../../interfaces/users.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string = '';
  users: any[] = [];
  
  userSelected = '';

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
  }
  
  searching() {
    this.usersService.getSuggestion( this.term.trim() ).subscribe( (data: any) => {
      this.users = data.usuarios;
    } );
  }

  selected( event: MatAutocompleteSelectedEvent ) {
    const user = event.option.value;
    this.term = user.nombre;
    
    this.usersService.getUserById( user.uid ).subscribe( (user: any) => this.userSelected = user );
  }
}
