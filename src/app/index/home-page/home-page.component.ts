import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User[];
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('userLogin');

    this.router.navigate(['login']);
  }
}
