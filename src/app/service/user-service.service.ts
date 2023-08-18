import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { environment } from 'environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiURL : "http://localhost:8080/api";

  constructor(private http:HttpClient) {

  }

  
  postUser(request:User){
    return this.http.post(this.apiURL + '/user',request);
  }

  
}
