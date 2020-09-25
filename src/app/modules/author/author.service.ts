import { HttpClient } from '@angular/common/http';
import { Author } from './author';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  Author: []
  URL_API = 'http://localhost:9000/api/author';

  constructor(private http: HttpClient) { }

  // create author
  createAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(`${this.URL_API}`,author);
  }

  // select all author
  getAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.URL_API}`);
  }

  // get one author
  getOneAuthor(_id: String): Observable<Author>{
    return this.http.get<Author>(`${this.URL_API}/${_id}`);
  }

  // update one author
  updateOneAuthor(_id: String,author: Author): Observable<Author>{
    return this.http.put<Author>(`${this.URL_API}/${_id}`,author);
  }

  // delete one author
  deleteAuthor(_id: String): Observable<Author>{
    return this.http.delete<Author>(`${this.URL_API}/${_id}`);
  }
}
