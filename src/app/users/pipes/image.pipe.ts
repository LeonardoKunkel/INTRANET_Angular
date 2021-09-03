import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/users.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( user: Usuario ): string {
    return `assets/user.png`;
  }

}
