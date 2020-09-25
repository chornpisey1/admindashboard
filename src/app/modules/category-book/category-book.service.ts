import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryBook } from './category-book';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CategoryBookService {

  category: CategoryBook[];
  URL_API = 'http://localhost:9000/api/category';

  createCategory(category: CategoryBook): Observable<CategoryBook>{
    return this.http.post<CategoryBook>(`${this.URL_API}`,category);
  } 

  // select all category from the database
  getCategories():Observable<CategoryBook[]>{
    return this.http.get<CategoryBook[]>(`${this.URL_API}`);
  }

  getOneCatory(_id: String): Observable<CategoryBook>{
    return this.http.get<CategoryBook>(`${this.URL_API}/${_id}`);
  }

  deleteCategory(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  updateCategory(_id: String,category: CategoryBook): Observable<CategoryBook>{
    return this.http.put<CategoryBook>(`${this.URL_API}/${_id}`,category);
  }

  constructor(private http: HttpClient) { }
}
