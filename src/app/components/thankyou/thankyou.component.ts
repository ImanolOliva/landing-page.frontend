import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  

  @Input() nameLocalStorage: string;
  
  ngOnInit(): void {
    
  
  }

  constructor(){}



}
