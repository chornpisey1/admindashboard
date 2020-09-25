import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: User[];
    /**
     * Api Node.js
     */
    // URL = 'http://localhost:9000/api/user';
    /**
     * Api Java of Spring boot
     */
    URL = 'http://localhost:8082/api/user';

    constructor(private http: HttpClient) { }

    // Create user
    postUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.URL}`,user);
    }
    // select all users
    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(`${this.URL}`)
    }
    // show User
    getOneUser(_id: String): Observable<User>{
        return this.http.get<User>(`${this.URL}/${_id}`)
    }
    // edit user
    updateOneUser(_id: String, user: Object): Observable<User>{
        return this.http.put<User>(`${this.URL}/${_id}`,user)
    }
    // delete one user
    deleteOneUser(_id: String): Observable<User>{
        return this.http.delete<User>(`${this.URL}/${_id}`)
    }
}
