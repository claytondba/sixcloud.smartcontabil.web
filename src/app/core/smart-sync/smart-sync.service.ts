import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SmartFile } from "./smart-file";
import { SmartFileComplete } from "./smart-file-complete";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

const API = "https://smartsync.devplus.com.br"
//const API = "https://localhost:7169"

@Injectable({  providedIn: 'root'})
export class SmartSyncService {

    user$: Observable<User| null>;
    userInfo: User | null = null;
    userName: string = "";
    constructor(private http: HttpClient, private userService: UserService) {
        this.user$ = userService.getUser();
        //this.isLoggedIn$ = this.userService.isLoggedIn;
        this.user$.subscribe( x => {this.userInfo = x, this.userName = x?.name as string} );
    }
    
    getListFiles(tokenProcess: string) {
 
        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('processToken', tokenProcess)
        .set('tenantId', this.userInfo?.tenant_id as string);
        console.log(this.userInfo);
        return this.http.get<SmartFile[]>(API + '/api/v1/files/get-list-files', { 'headers': headers });
    }

    getFile(tokenProcess: string, competence: string, fileName: string) {
 
        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('processToken', tokenProcess)
        .set('tenantId', this.userInfo?.tenant_id as string);
        
        return this.http.get<SmartFileComplete>(API + '/api/v1/files/get-list-files/' + 
                    competence + '/' + fileName, { 'headers': headers });
    }
}