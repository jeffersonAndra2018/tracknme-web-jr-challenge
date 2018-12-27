import { Points } from './points.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiPath: string = "api/points?dateTime="

  constructor(private http: HttpClient) { }

  
  
  getAll(): Observable<Points[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handledError),
      map(this.jsonDataPoints)
      )
    }

  
  getByDate(dateTime: string): Observable<Points>{
    const url = `${this.apiPath}/?${dateTime}`;
    return this.http.get(url).pipe(
      catchError(this.handledError),
      map(this.jsonDataPoint)
    )
  }
  

  
  private  jsonDataPoints(jsonData: any[]): Points[]{
    const points: Points[] = [];
    jsonData.forEach(element => points.push(element as Points));
    return points;
  }

  private jsonDataPoint(jsonData: any): Points{
    return jsonData as Points;
  }

  private handledError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO =>" + error);
    return throwError(error);
  }
  
}

