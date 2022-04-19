import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  username="lydiah1wachira";

  base_Url = 'https://api.github.com';

  async searchUsers(username: string) {
    const search = this.http.get<any>(`${this.base_Url}/users/${username}`);
    return await lastValueFrom(search).then((response) => response);
  }

  getUserRepo(username: string): Observable<any> {
    return this.http.get<any>(`${this.base_Url}/users/${username}/repos`);
  }

  constructor(private http: HttpClient) { }
}
