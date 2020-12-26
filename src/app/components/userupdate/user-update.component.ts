import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: 'user-update.component.html'
})
export class UserUpdateComponent implements OnInit{

  firstName: string;
  lastName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  update() {

  }
}
