
// @Component({
  //   selector: 'app-signup',
  //   templateUrl: './signup.component.html',
  //   styleUrls: ['./signup.component.css']
  // })
  // export class SignupComponent implements OnInit {
    
    //   constructor() { }
    
    //   ngOnInit(): void {
      //   }
      
      // }
      
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    // moduleId:     module.id,
    selector:     'app-signup',
    templateUrl:  'signup.component.html',
    styleUrls:    ['./signup.component.css']
})

export class SignupComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
                
                );
    }
}
