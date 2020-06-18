import { Injectable } from "@angular/core";
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    user: User = {
        username: 'trungdv',
        password: 'trung1234',
        id: 1
    }
    constructor(private httpClient: HttpClient) { }

    public login(userName: string, passWord: string): boolean {

        //call server o day 
        debugger;
        this.httpClient.post<User>('http://localhost:8080/authenticate',this.user).pipe(
            
          );    
    
        if (userName == this.user.username && passWord == this.user.password) {
            
            localStorage.setItem('userLogin', userName);
            return true;
        }

        return false;
    }
    handleError<T>(arg0: string): any {
        throw new Error("Method not implemented.");
    }
}