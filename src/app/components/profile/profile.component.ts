import { DatePipe } from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { ProfileFormService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
}) export class ProfileComponent {
  profile;
  profileForm;
  birthday = new Date((new Date().getTime() - 3888000000));
  constructor(
    private profileFormBuilder: FormBuilder,
    private profileRoute: ActivatedRoute,
    private _profileFormService: ProfileFormService
  ) {
    const userData = localStorage.getItem('user_data');
    const pipe = new DatePipe('en-US');
    if (userData) {
      const object = JSON.parse(userData);
      this.profile = object.personInfo;
    }
    
    this.profileForm = this.profileFormBuilder.group({
      uniqueId: [{ value: this.profile.uniqueId, disabled: true }, [Validators.required]],
      name: [{ value: this.profile.name, disabled: true }, [Validators.required]],
      birthday: [{ value: new Date(this.profile.birthday), disabled: true }, [Validators.required]],
      gender: [{ value: this.profile.gender, disabled: true }, []],
      contacts: this.profileFormBuilder.array([]),
      addresses: this.profileFormBuilder.array([]),
    });
  };
  genderSelectObject = [{
    value: 'F',
    valueView: 'Feminino'
  }, {
    value: 'M',
    valueView: 'Masculino'
  }];
  contactTypeSelectObject = [{
    value: 'mobile',
    valueView: 'Celular'
  }, {
    value: 'email',
    valueView: 'E-mail'
  }, {
    value: 'phone',
    valueView: 'Telefone convencional'
  }, {
    value: 'socialMedia',
    valueView: 'Rede social'
  }];

  newContacts(): FormGroup {
    return this.profileFormBuilder.group({
      contactId: [null, [Validators.required,]],
      contactType: [null, []],
      value: [null, [Validators.required,]],
      contactComplement: [null, [Validators.required,]],
    })
  };
  newAddresses(): FormGroup {
    return this.profileFormBuilder.group({
      postalCode: [null, [Validators.required,]],
      addressId: [null, [Validators.required,]],
      address: [null, [Validators.required,]],
      number: [null, [Validators.required,]],
      district: [null, [Validators.required,]],
      addressComplement: [null, []],
      country: [null, []],
      state: [null, []],
      city: [null, []],
    })
  };
  addContacts() {
    this.contacts.push(this.newContacts())
  }
  addAddresses() {
    this.addresses.push(this.newAddresses())
  }
  get contacts(): FormArray {
    return this.profileForm.get('contacts') as FormArray
  };
  get addresses(): FormArray {
    return this.profileForm.get('addresses') as FormArray
  };
  removeContacts(i: number) {
    this.contacts.removeAt(i)
  }
  removeAddresses(i: number) {
    this.addresses.removeAt(i)
  }
  profileSubmit = () => {
    this._profileFormService.save(this.profileForm).then((res) => {

    }).catch((err) => console.log(err));
  }
}