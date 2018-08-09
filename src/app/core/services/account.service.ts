import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";


export interface IAccountService {
    // token: string;
    // username: string;
    login(username: string, password: string);
    logout();
    isAuthenticated();
}

@Injectable()
export class AccountService implements IAccountService {

    public loggedIn: BehaviorSubject<boolean>;

    constructor(private http: HttpClient, private router: Router) {
        this.loggedIn = new BehaviorSubject<boolean>(false);
    }

    public login(username: string, password: string): Observable<any> {
        // @TODO here!
        return new Observable();
    }

    public logout() {
        // @TODO here!
    }

    /** validando si el usuario esta autenticado */
    public isAuthenticated(): Observable<boolean> {
        // @TODO here!
        return new Observable();
    }

    /** validando si el usuario NO esta autenticado */
    public isInvited(): Observable<boolean> {
        // @TODO here!
        return new Observable();
    }
}