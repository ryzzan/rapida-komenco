import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
}) 

export class LoginComponent {
  constructor (private loginFormBuilder: FormBuilder, private authService: AuthService) {}

  loginForm = this.loginFormBuilder.group({
    'user': [null, [Validators.required]],
    'password': [null, [Validators.required]],
  });


  loginSubmit = (): void => {
    void this.authService.login(this.loginForm.value);
  }
}
