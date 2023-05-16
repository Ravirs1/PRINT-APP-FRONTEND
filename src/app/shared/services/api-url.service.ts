import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor(
  ) { }
  
  LOGIN = `${environment.BASE_URL}/login`;
  SIGNUP = `${environment.BASE_URL}/signup`;
}
