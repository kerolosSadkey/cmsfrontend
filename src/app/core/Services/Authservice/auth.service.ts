import { CommonService } from './../common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../Model/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CommonService<IUser,number> {
  private httpOption ={}
  constructor(private httpclient:HttpClient) {
   super(httpclient,environment.APIBaseURL+"/user")
}
user:any

 login(username:string,password:string){
  return this.httpclient.get<IUser>(`${environment.APIBaseURL}/ManageUser/Login?username=${username}&password=${password}`);
 }

// GetAllDocument(): Observable<IUser[]> {
//   return this.httpclient.get<IUser[]>(`${environment.APIBaseURL}/document/GetAllDocument`);
// }

// GetDocumentbyId(docId:number): Observable<IUser> {
//   return this.httpclient.get<IUser>(`${environment.APIBaseURL}/document/GetDocumentbyId?id=${docId}`);
// }
// AddDocument( name:string, date:Date , due_Date:Date , priorityId:number,formdata:any):Observable<IUser> {

//   return this.httpclient.post<IUser>(`${environment.APIBaseURL}/document/AddDocument?name=${name}&date=${date}&due_Date=${due_Date}&priorityId=${priorityId}`,formdata );

// }

// UpdateDocument(id:number ,name:string, date:Date , due_Date:Date , priorityId:number,formdata:any):Observable<IUser> {

//   return this.httpclient.put<IUser>(`${environment.APIBaseURL}/document/UpdateDocument?id=${id}&name=${name}&date=${date}&due_Date=${due_Date}&priorityId=${priorityId}`,formdata );

// }
// DeleteDocument(docId:number): Observable<IUser> {
//   return this.httpclient.delete<IUser>(`${environment.APIBaseURL}` + `/document/DeleteDocument?id=${docId}`);
// }

// GetProductById(pid: number): Observable<IUser> {
//   return this.httpclient.get<IUser>(`${environment.APIBaseURL}` + `/document/GetProductById/${pid}`);
// }
}
