import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  maritima(){
    this.router.navigate(['/' + 'app/gestion/maritima'])
  }
  terrestre(){
    this.router.navigate(['/' + 'app/gestion/terrestre'])
  }
  listadogestion(){
    this.router.navigate(['/' + 'app/gestion'])
  }

}
