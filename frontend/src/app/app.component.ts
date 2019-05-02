import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService],
styles: []
})

export class AppComponent implements OnInit{

  constructor() {

  }

  ngOnInit() {};

  }


