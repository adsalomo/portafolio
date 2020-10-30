import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor(public dataPageService: DataPageService) {}

  ngOnInit(): void {}
}
