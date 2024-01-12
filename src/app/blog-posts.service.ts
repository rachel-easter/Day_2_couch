import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map ,tap} from 'rxjs/operators';

interface ResponseType {
  rows: { doc: any }[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private baseUrl = 'http://localhost:5984/sample';
  private credentials = 'admin:admin'; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(this.credentials));

    return this.http.get<ResponseType>(`${this.baseUrl}/_all_docs?include_docs=true`, { headers })
      .pipe(
        tap(response => console.log('Response:', response)),
        map(response => (response.rows || []).map(row => row.doc))
      );
  }
}
