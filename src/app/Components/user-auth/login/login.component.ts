
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService, private router:Router,private logService:LogService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      // Add your form submission logic here
      this.authService.login(this.loginForm.value)

      if(this.authService.isLoggedIn())
        {
          this.router.navigate(['/ToDo']);
        }
        else
        {
          this.logService.Log('Provide login details are wrong.Please check your login credentials.');

        }
    }
  }
}
