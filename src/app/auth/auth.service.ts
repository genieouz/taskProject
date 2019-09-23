import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from './component/interface/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: {username: string; password: string}): Observable<IUser> {
    return this.http.post<IUser>(`${environment.API_URL}/signin`, credentials);
  }
  register(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${environment.API_URL}/signup`, user);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setToken(token) {
    localStorage.setItem("token", token);
  }
  logout() {
    localStorage.clear();
  }
  isConnected() {
    if (this.getToken()) return true;
    return false;
  }
}
