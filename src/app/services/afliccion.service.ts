import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afliccion } from '../models/afliccion';

@Injectable({
  providedIn: 'root'
})
export class AfliccionService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://architecture-mvvm.herokuapp.com/';
  }

  public get(idPaciente: string, cb: (data: Afliccion[]) => void): void {
    this.http.get<any>(this.baseUrl + 'affliction/' + idPaciente).subscribe(data => {
      cb(data['afflictionStored']);
    })
  }

  public save(data: Afliccion) {
    this.http.post(this.baseUrl + 'affliction', data).subscribe();
  }

  public delete(idAfliccion: string) {
    this.http.delete(this.baseUrl + 'affliction' + idAfliccion).subscribe();
  }

}
