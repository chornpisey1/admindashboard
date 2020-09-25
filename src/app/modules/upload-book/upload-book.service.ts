import { Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadBook } from './upload-book';

@Injectable({
  providedIn: 'root'
})
export class UploadBookService {

  URL_API = 'http://localhost:9000/api/upload';
  constructor(private http: HttpClient) { }

  fileUpload(dataFile){
    return this.http.post(`${this.URL_API}`, dataFile)
  }

  getFileUpload():Observable<UploadBook[]>{
    return this.http.get<UploadBook[]>(`${this.URL_API}`);
  }

  deleteFile(id: String): Observable<UploadBook>{
    return this.http.delete<UploadBook>(`${this.URL_API}/${id}`);
  }

  viewFile(filename: String){
    return this.http.post(`${this.URL_API}/view-file`,filename)
  }

  downloadFile(file: String){
    var body = {filename: file}
    return this.http.post(`${this.URL_API}/download`,body,{
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }
}
