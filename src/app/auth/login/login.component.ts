import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    correo: ['leonardo.bravo@softoil.com.mx',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private auth: AuthService,
               public dialog: MatDialogModule) { }

  ngOnInit(): void {
  }
  
  login() {
    console.log(this.myForm.value);
    const { correo, password } = this.myForm.value;
    
    this.auth.login( correo, password ).subscribe( ok => {
      if ( ok === true ) {
        this.router.navigateByUrl('/users');
      } else {
        window.alert('Error. Contraseña o correo incorrecto')
      }
    });
    
  }

}
