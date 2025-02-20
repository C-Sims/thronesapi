import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfThronesService {

  private apiUrl = "https://thronesapi.com/api/v2/Characters";

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getCharacterById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
