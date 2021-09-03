import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Empresa, Genero, Rol, Estado, Usuario } from '../../interfaces/users.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  genero = [
    {
      id: 'Hombre',
      desc: 'Hombre'
    },
    {
      id: 'Mujer',
      desc: 'Mujer'
    },
    {
      id: 'Otro',
      desc: 'Otro'
    }
  ];
  
  estado = [
    {
      id: 'Soltero',
      desc: 'Soltero'
    },
    {
      id: 'Casado',
      desc: 'Casado'
    },
  ]
  
  roles = [
    {
      id: 'USER_ROLE',
      desc: 'Usuario'
    },
    {
      id: 'ADMIN_ROLE',
      desc: 'Administrador'
    }
  ];
  
  empresas = [
    {
      id: 'Kepler Oil & Gas',
      desc: 'Kepler Oil & Gas'
    },
    {
      id: 'ACE Engineering',
      desc: 'ACE Engineering'
    },
    {
      id: 'Softoil',
      desc: 'Softoil'
    },
    {
      id: 'Energy Training Center',
      desc: 'Energy Training Center'
    }
  ];

  user: Usuario = {
    calle: '',
    cel: 0,
    colonia: '',
    correo: '',
    cp: 0,
    curp: '',
    edo: '',
    empresa: Empresa.kepler,
    estado: Estado.soltero,
    fecha: '',
    genero: Genero.hombre,
    img: '',
    municipio: '',
    nombre: '',
    puesto: '',
    rol: Rol.userRole
  }

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
  }
  
  save() {
    if ( this.user.nombre.trim().length === 0 ) {
      return;
    }
    
    this.usersService.postUser( this.user ).subscribe( data => {
      console.log(data);
    });
    
  }

}
