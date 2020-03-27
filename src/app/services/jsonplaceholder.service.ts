import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { DummyData} from '../DummyData';
import { Observable, throwError} from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http:HttpClient) { }
  
  
  path = "https://jsonplaceholder.typicode.com/todos";


  getDummyData():Observable<DummyData[]>{
    return this.http
    .get<DummyData[]>(this.path)
    .pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
   
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent)  {
      errorMessage = err.error.message;
    }
    else{
      errorMessage = "Error";
    }
    return throwError(errorMessage);
  }
}