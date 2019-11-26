import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/jngson'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get('/server/api/v1/bikes');
  }

  get(id: number) {
    return this.http.get(`/server/api/v1/bikes/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`/server/api/v1/bikes/${id}`);
  }

  add(bike: any) {
    const body = JSON.stringify(bike);
    return this.http.post("/server/api/v1/bikes", body, httpOptions);
  }

}
