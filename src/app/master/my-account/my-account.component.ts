import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog, MatSnackBar, MatSnackBarConfig, } from '@angular/material';

import { UserInformations, UserPassword } from './my-account.interface';
import { EmailRegex, PhoneNumberRegex } from 'app/shared/shared-base.interface';

import { MyAccountService } from './my-account.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit, OnDestroy {
  userPassword: FormGroup;
  userInformations: FormGroup;
  snackbarSubscription: Subscription;
  loadingPasswordButton = false;
  submittedPasswordButton = false;
  loadingInformationsButton = false;
  submittedInformationsButton = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private myAccountService: MyAccountService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    /* Manage password reset form */
    this.userPassword = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    }, { validator: this.matchingPasswords('password', 'passwordConfirm') });

    /* Manage user informations form */
    this.userInformations = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      position: [''],
      phone: ['', Validators.pattern(PhoneNumberRegex)],
      email: ['', [Validators.required, Validators.pattern(EmailRegex)]]
    });

    /* Get user existing informations */
    // this.currentUser = this.user.currentUser;
    // if (this.currentUser) {
    //   const user: UserInformations = {
    //     email: this.currentUser.email || '',
    //     firstName: this.currentUser.firstName || '',
    //     position: this.currentUser.position || '',
    //     lastName: this.currentUser.lastName || '',
    //     phone: this.currentUser.phone || ''
    //   };
    //   this.userInformations.setValue(user);
    // }
  }

  matchingPasswords(firstKey: string, secondKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const firstKeyControl = group.controls[firstKey];
      const secondKeyControl = group.controls[secondKey];

      if (firstKeyControl.value !== secondKeyControl.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  onPaste(e: Event) {
    e.preventDefault();
  }

  onPasswordFormSubmit() {
    // Prevent multiclick
    this.loadingPasswordButton = true;
    this.submittedPasswordButton = true;
    // Configure snackBar
    const snackbarConfig: MatSnackBarConfig = {
      duration: 5000
    };

    const dataToSend: UserPassword = {
      oldPassword: this.userPassword.value.currentPassword,
      newPassword: this.userPassword.value.password
    };

    this.myAccountService.updatePassword(dataToSend)
      .subscribe(
      (res) => {
        this.loadingPasswordButton = false;
        const snackBarAction = this.snackBar.open(`Votre mot de passe a bien été mis à jour`, 'X', snackbarConfig);
        this.snackbarSubscription = snackBarAction.afterDismissed()
          .subscribe(() => {
            this.submittedPasswordButton = false;
          });
      },
      (errorRequest) => {
        this.loadingPasswordButton = false;
        // Manage BadRequest response which can't be parsed
        if (errorRequest.status === 400) {
          const snackBarAction = this.snackBar.open(`L'ancien mot de passe n'est pas valide`, 'X', snackbarConfig);
          this.snackbarSubscription = snackBarAction.afterDismissed()
            .subscribe(() => {
              this.submittedPasswordButton = false;
            });
        } else {
          console.error(errorRequest);
          const snackBarAction = this.snackBar.open(`Une erreur s'est produite`, 'X', snackbarConfig);
          this.snackbarSubscription = snackBarAction.afterDismissed()
            .subscribe(() => {
              this.submittedPasswordButton = false;
            });
        }
      });
  }

  onUserFormSubmit() {
    // Prevent multiclick
    this.loadingInformationsButton = true;
    this.submittedInformationsButton = true;
    // Configure snackBar
    const snackbarConfig: MatSnackBarConfig = {
      duration: 5000
    };

    const dataToSend: UserInformations = {
      email: this.userInformations.value.email,
      firstName: this.userInformations.value.firstName,
      position: this.userInformations.value.position,
      lastName: this.userInformations.value.lastName,
      phone: this.userInformations.value.phone
    };

    this.myAccountService.updateUser(dataToSend)
      .subscribe(
      (res) => {
        this.loadingInformationsButton = false;
        // Call service to get the updated user
        // this.authService.getCurrentUser().subscribe(
        //   () => this.currentUser = this.user.currentUser
        // );

        const snackBarAction = this.snackBar.open(`Vos données ont bien été sauvegardées.`, 'X', snackbarConfig);
        this.snackbarSubscription = snackBarAction.afterDismissed()
          .subscribe(() => {
            this.submittedInformationsButton = false;
          });
      },
      (error) => {
        this.loadingInformationsButton = false;
        const snackBarAction = this.snackBar.open(`${error.json().error}`, 'X', snackbarConfig);
        this.snackbarSubscription = snackBarAction.afterDismissed()
          .subscribe(() => {
            this.submittedInformationsButton = false;
          });
      });
  }

  return() {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    if (this.snackbarSubscription) {
      this.snackbarSubscription.unsubscribe();
    }
  }
}
