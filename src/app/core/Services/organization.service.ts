import { IOrganization } from './../Model/iorganization';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends CommonService<IOrganization,number> {

  constructor(private httpclient:HttpClient) {
    super(httpclient,environment.APIBaseURL+"api/Orginaztion")
  }
}
