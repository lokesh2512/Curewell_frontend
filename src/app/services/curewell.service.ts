import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../curewell-interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {

  constructor(private http: HttpClient) { }
  getDoctors(): Observable<Doctor[]> {
    let tempvar = this.http.get<Doctor[]>('https://localhost:44322/api/CureWell/GetDoctor');
    //To do implement necessary logic
    return tempvar;
  }
}
