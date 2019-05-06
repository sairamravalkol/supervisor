import { Component, OnInit } from '@angular/core';
import { StringDecoder } from 'string_decoder';
import { DataService } from '../data.service';
export interface Employee {
  value: string;
  viewValue: string;
  associate:any;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  selectedValue:string;
  selectedOption:string;
  gabBal="10 Hrs"

  
  
  
  
  constructor() {
   
  }

  ngOnInit() {
   
    
  }

}
