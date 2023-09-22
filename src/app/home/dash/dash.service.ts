import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceStatus } from "./models/service-status";

const API = "https://rpa.devplus.com.br/api/v1"
//const API = "https://localhost:7109/api/v1"

@Injectable({
  providedIn:'root'
})
export class DashService {

  constructor(private http: HttpClient) { }

  statusCnd() {
      return this.http.get<ServiceStatus[]>(API + '/dashboard/cnd');
  }
  statusGinfes() {
      return this.http.get<ServiceStatus[]>(API + '/dashboard/ginfes');
  }
  statusGiss() {
    return this.http.get<ServiceStatus[]>(API + '/dashboard/giss');
  }

}
