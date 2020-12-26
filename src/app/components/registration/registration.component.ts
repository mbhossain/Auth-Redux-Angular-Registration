import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: 'resistration.component.html'
})
export class RegistrationComponent implements OnInit{
  user: User = new User();

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.user);
  }
}
