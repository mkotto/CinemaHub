import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { genreCreationDTO, genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/genres'; 

  getAll(): Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.apiURL);
  }

  create(genre: genreCreationDTO){
    return this.http.post(this.apiURL, genre);
  }

  getById(id: number) : Observable<genreDTO> {
    return this.http.get<genreDTO>(`${this.apiURL}/${id}`);
  }

  edit(id: number, genre: genreCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }
}
