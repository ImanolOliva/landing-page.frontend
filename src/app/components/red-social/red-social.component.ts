import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-social',
  templateUrl: './red-social.component.html',
  styleUrls: ['./red-social.component.scss']
})
export class RedSocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMovedRight: boolean = false;

  toggleImagePosition() {
    this.isMovedRight = !this.isMovedRight;
  }

  isMovedUp: boolean = false;

  toggleImageHighlight(highlight: boolean) {
    this.isMovedUp = highlight;
  }
}
