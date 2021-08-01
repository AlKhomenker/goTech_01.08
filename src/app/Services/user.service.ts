import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";

//import { User } from "../Shared/User/user.class";

@Injectable()
export class UserService {

  baseURL: string = "https://my-json-server.typicode.com/gotech-io/demo-server/candidates";

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
   return this.http.get(this.baseURL);
 }

}
