import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-left',
    templateUrl: './menu-left.component.html',
    styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

    user: User[];
    listData = [
        {
            link : '',
            tab : 'Dashboard',
            img: 'list.png'
        },
        {
            link : '',
            tab : 'Components',
            img: 'list.png'
        },
        {
            link : '',
            tab : 'Form',
            img: 'list.png'
        },
        {
            link : '',
            tab : 'Tables',
            img: 'list.png'
        },
        {
            link : '',
            tab : 'Maps',
            img: 'list.png'
        },
        {
            link : '',
            tab : 'Charts',
            img: 'list.png'
        }
    ]
    constructor(private homeService: HomeService, private router: Router) { }

    ngOnInit(): void {
    }

    logout() {
        localStorage.removeItem('userLogin');

        this.router.navigate(['login']);
    }

}
