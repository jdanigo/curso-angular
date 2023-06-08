import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(
    private http: HttpClient
  )
  {
    
  }

  postLogin(data: any): Observable<any>{
    return this.http.post<any>(BASE_URL+"/auth/signin", data)
  }
}
