import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    this.authentocationService.logOut();
    this.router.navigate(['login/home']);
  }
}
