import { Component } from '@angular/core';
import { UserDetail } from 'src/app/models/user-details.model';
import { AccountDetailsService } from './account-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  userDetailForm!: FormGroup;
  addressForm!: FormGroup;
  currentUserDetails: UserDetail | null | undefined = {} as UserDetail;
  userId: string = '';

  constructor(private userDetailService: AccountDetailsService,
    private fb: FormBuilder) {}

  ngOnInit(): void {

   this.initUserDetailsForm();
   this.initAddressForm();
   this.getCurrentUserDetails();
  }

 initAddressForm() {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  initUserDetailsForm() {
    this.userDetailForm = this.fb.group({
      // Define your form controls here (e.g., firstName, lastName, email, etc.)
    });
  }

 getCurrentUserDetails() {
  this.userDetailService.getCurrentUserDetails().subscribe((userDetails) => {
    this.currentUserDetails = userDetails;
    console.log(this.currentUserDetails)
  });
 }

  addUserDetail() {
    const userDetailData = this.userDetailForm.value;
    this.userDetailService.addUserDetail(userDetailData).then(() => {
      // Handle success
      this.userDetailForm.reset();
    }).catch(error => {
      // Handle error
      console.error('Error adding user detail: ', error);
    });
  }

  updateUserDetail(userId: string) {
    const userDetailData = this.userDetailForm.value;
    this.userDetailService.updateUserDetail(userId, userDetailData).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error updating user detail: ', error);
    });
  }

  getAddress() {
    this.userDetailService.getUserAddresses(this.userId).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }
  
  addAddress() {
    const addressData = this.addressForm.value;
    this.userDetailService.addAddress(this.userId, addressData).then(() => {
      // Handle success
      this.addressForm.reset();
    }).catch(error => {
      // Handle error
      console.error('Error adding address: ', error);
    });
  }

  updateAddress(addressId: string) {
    const addressData = this.addressForm.value;
    this.userDetailService.updateAddress(this.userId, addressId, addressData).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error updating address: ', error);
    });
  }
  
  deleteAddress(addressId: string) {
    this.userDetailService.deleteAddress(this.userId, addressId).then(() => {
      // Handle success
    }).catch(error => {
      // Handle error
      console.error('Error deleting address: ', error);
    });
  }

}
