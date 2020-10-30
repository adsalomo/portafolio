import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPage } from '../interfaces/data-page.interface';

@Injectable({
  providedIn: 'root',
})
export class DataPageService {
  data: DataPage = {};
  loading = true;
  team: any[] = [];

  constructor(public http: HttpClient) {
   this.loadInfo();
   this.loadTeam();
  }

  private loadInfo() {
    this.http.get('/assets/data/data.json').subscribe((resp: DataPage) => {
      this.loading = false;
      this.data = resp;
    });
  }

  private loadTeam() {
    this.http.get('https://angular-html-72bea.firebaseio.com/team.json').subscribe((resp: any) => {
      this.team = resp;
    });
  }
}
