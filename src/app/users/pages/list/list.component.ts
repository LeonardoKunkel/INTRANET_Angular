import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Usuario, Welcome } from '../../interfaces/users.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any[] = [];

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe( (data: any) => {
      this.users = data.usuarios;
    });
    
  }

}
