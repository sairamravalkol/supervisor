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
  

  
  
  employees: Employee[] = [
    { value: 'john', viewValue: 'John', associate:['sai','ram','krish','nandu']},
    { value: 'krish', viewValue: 'Krish', associate:['jocky','wills','keats'] },
    { value: 'smith', viewValue: 'Smith' , associate:['smith','johnny']}
  ];
  message: string="Helloworld";
  
  constructor(private data:DataService) {
    this.data.message = "Hello World";
  }

  ngOnInit() {
   
    
  }

}
