import { Component, Input } from '@angular/core';
import { Usuario } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [`
    mat-card {
      margin: 20px;
    }
  `]
})
export class UserCardComponent {

  @Input() user!: Usuario;

}
