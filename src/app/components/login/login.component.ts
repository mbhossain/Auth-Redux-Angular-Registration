import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  userName: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.userName, this.password).subscribe(
      res => {
        if (res.isRegisterd){
          this.toast.success('login Successful');
          this.router.navigate(['/userupdate']);
        }else {
          this.toast.error('login Faild');
        }
      },
      error => console.log(error)
    );
    // this.router.navigate(['/userupdate']);
  }
}
