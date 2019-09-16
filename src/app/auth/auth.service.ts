import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials) {
    return this.http.post(`${environment.API_URL}/signin`, credentials);
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
