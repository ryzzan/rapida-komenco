import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormGroupDirective
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute
} from '@angular/router';
import { MyErrorHandler } from 'src/utils/error-handler';
import {
  RegisterService
} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerId: string;
  isAddModule: boolean;
  registerForm: FormGroup;
  errorHandler = new MyErrorHandler;
  loading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder, 
    private _activatedRoute: ActivatedRoute, 
    private _registerService: RegisterService,
    private _snackbar: MatSnackBar
  ) {

    this.registerId = this._activatedRoute.snapshot.params['id'];
    this.isAddModule = !this.registerId;
    this.registerForm = this._formBuilder.group({
      uniqueId: [null, []],
      birthday: [null, []],
      email: [null, []],
      password: [null, []],
    });

  }

  ngOnInit(): void {}

  registerSubmit = (formDirective: FormGroupDirective) => {
    const date = new Date(this.registerForm.get('birthday')?.value);
    const day = (date.getDate() < 10) ? '0' + date.getDate().toString() : date.getDate().toString();
    const month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1).toString();
    const year = date.getFullYear();
    const dateToString = `${day}/${month}/${year}`;
    
    this.registerForm.get('birthday')?.setValue(dateToString);

    this._registerService.save(this.registerForm.value)
    .then((res: any) => {
      if (res.userId) {
        // TO-DO: email verification before authorizing
        const body = {
          "userId": res.userId,
          "verified": true,
          "acl": "60a9cc6794cd725abfe64e7a",
          "projectId": "60a156941a332bacb40d72c7"
        }
        this._registerService.authorize(body)
        .then((resAuthorize) => {
          this.loading = false;
          this.registerForm.reset();
          formDirective.resetForm();

          const message = 'Cadastro e autorização finalizados.';
          this._snackbar.open(message, undefined, {
            duration: 4 * 1000,
          });
        })
        .catch((err) => {
          this.loading = false;
          const message = this.errorHandler.apiErrorMessage(err.error.error.message);
          this._snackbar.open(message, undefined, {
            duration: 4 * 1000,
          });
        });
      }
    })
    .catch((err) => {
      this.loading = false;
      const message = this.errorHandler.apiErrorMessage(err.error.error.message);
      this._snackbar.open(message, undefined, {
        duration: 4 * 1000,
      });
    });
  }
}
