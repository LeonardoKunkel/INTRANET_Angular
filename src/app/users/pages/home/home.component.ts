import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  get user() {
    return { ...this.auth.user };
  }
  
  @HostBinding('class') componentCssClass: any;

  constructor( private router: Router,
               private auth: AuthService,
               public overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  public onSetTheme( e: string ) {
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

  logout() {
    
    this.router.navigateByUrl('/auth');
    this.auth.logout();
    
  }
}
