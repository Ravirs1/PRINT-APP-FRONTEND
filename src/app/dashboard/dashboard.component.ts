import { Component, OnInit } from '@angular/core';
import { ApiUrlService } from '../shared/services/api-url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(
   private apiUrl: ApiUrlService
  ) { }

  ngOnInit(): void {
    console.log(this.apiUrl.LOGIN)
  }

}
