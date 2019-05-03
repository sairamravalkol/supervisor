import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Input()  message:string;
 
  constructor(private data:DataService) { 
    
  }

  ngOnInit() {
    
  }

}
