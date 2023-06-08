import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../ngrx-store/AppState';
import { loginAction } from '../ngrx-store/actions/auth.actions';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  store$ : Observable<any>;
  email$ : string | undefined;
  password$ : string | undefined;
  email: string | undefined;
  password: string | undefined;
  public loading: boolean = false;
  public errorMessage: string = "";


  constructor
  (
    private store : Store<AppState>,
    private _loginService : LoginService,
    private _router : Router
  )
  {
    this.store$ = this.store.select(state => state);
    
  }
  ngOnInit(){
  this.store$.subscribe(response => {
    console.log("mostrando response", response.authStore.userData);
    this.email$ = response.authStore.userData.email;
    this.password$ = response.authStore.userData.password;
  })
  
  }

  login(){
    this.loading = true;   
    const payload = {
      email: this.email,
      password: this.password
    }
    this._loginService.postLogin(payload).subscribe({
      next: (response) => {
        console.log("mostrando respuesta del login", response)
        this.store.dispatch(loginAction({data: response}))
        this._router.navigate(["/dashboard"])
      },
      error: (error) => {
        console.log("mostrando error", error)
        this.errorMessage = error.error.message;
        this.loading = false
      },
      complete: () => this.loading = false
    })
  }

}
