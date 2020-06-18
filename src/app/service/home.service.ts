import { Injectable, Inject } from "@angular/core";
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    users: User[] = [
        {
            username: 'trungdv',
            password: 'trung1234',
            id: 1
        }, {
            username: 'trungdv2',
            password: 'trung12342',
            id: 2
        }, {
            username: 'trungdv3',
            password: 'trung1234',
            id: 3
        }
    ]

    baseUrlServer: string;


    constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrlServer = baseUrl;
    }

    public getUser(): User[] {

        return this.users;
    }

    public getListUserFromServer(): Observable<User[]> {
        const headers = new HttpHeaders().set("X-CustomHeader", "custom header value");
        return this.httpClient.get<User[]>('http://localhost:8080/home/getListUser', { headers });
    }
}