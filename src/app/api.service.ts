import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  name: {
    first: string;
    last: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<any>('https://randomuser.me/api/?results=10').pipe(
      map(response => {
        return response.results.map((result: any) => {
          return {
            name: {
              first: result.name.first,
              last: result.name.last
            },
          };
        });
      })
    );
  }
}
