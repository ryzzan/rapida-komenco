import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { AuthService } from './auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from '../../../environments/environment';

import { MyErrorHandler } from 'src/utils/error-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
}) 

export class LoginComponent {
  errorHandler = new MyErrorHandler;
  loading: boolean = false;

  constructor (
    private loginFormBuilder: FormBuilder, 
    private authService: AuthService,
    private _snackbar: MatSnackBar
  ) {}

  loginForm = this.loginFormBuilder.group({
    'user': [null, [Validators.required, Validators.email]],
    'password': [null, [Validators.required, Validators.minLength(6)]],
    'projectId': environment.projectId
  });


  loginSubmit = (): void => {
    this.loading = true;
    this.authService.login(this.loginForm.value)
    .catch(err => {
      this.loading = false;
      const message = this.errorHandler.apiErrorMessage(err.error.error.message);
      this._snackbar.open(message, undefined, {
        duration: 4 * 1000,
      });
    })
  }
}
