import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  user: User[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getListUserFromServer().subscribe(
      data => {
        this.user = data;
        console.log(this.user)
      },
      errData => console.log(errData)
    );
  }

}
