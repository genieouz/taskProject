import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class TasksService {
  constructor(private http: HttpClient) {}

  attachFile(data) {
    return this.http.put(`${environment.API_URL}/attach-file`, data);
  }

  getTasks() {
    return this.http.get(`${environment.API_URL}/tache`);
  }

  addTask(data) {
    return this.http.post(`${environment.API_URL}/tache`, data);
  }
}
