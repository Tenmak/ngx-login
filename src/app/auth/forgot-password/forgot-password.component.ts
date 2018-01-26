import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { ForgotPassword } from 'app/auth/auth.interface';
import { EmailRegex } from 'app/shared/shared-base.interface';

import { AuthService } from 'app/auth/auth.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit, OnDestroy {
  user: FormGroup;
  submitted = false;
  loading = false;
  serviceSubscription: Subscription;
  snackbarSubscription: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EmailRegex)]]
    });
  }

  onSubmit() {
    // Prevent multiclick
    this.submitted = true;
    this.loading = true;

    // Configure snackBar
    const snackbarConfig: MatSnackBarConfig = {
      duration: 1700
    };

    const snackBarAction = this.snackBar.open(`Email envoyé !`, 'X', snackbarConfig);
    this.snackbarSubscription = snackBarAction.afterDismissed()
      .subscribe(() => {
        this.submitted = false;
        this.loading = false;

        // Temporary
        this.router.navigate(['/auth/login']);
      });

    // this.serviceSubscription = this.authService.sendMailForPasswordReset(this.user.value.email)
    //   .subscribe(
    //   () => {
    //     this.loading = false;
    // const snackBarAction = this.snackBar.open(`Un e-mail a été envoyé à l'adresse ${this.user.value.email}`, 'X', snackbarConfig);
    // this.snackbarSubscription = snackBarAction.afterDismissed()
    //   .subscribe(() => {
    //     this.submitted = false;
    //   });
    //   },
    //   (error) => {
    //     this.loading = false;
    //     const snackBarAction = this.snackBar.open(`Une erreur s'est produite.`, 'X', snackbarConfig);
    //     this.snackbarSubscription = snackBarAction.afterDismissed()
    //       .subscribe(() => {
    //         this.submitted = false;
    //       });
    //   });
  }

  ngOnDestroy() {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
    if (this.snackbarSubscription) {
      this.snackbarSubscription.unsubscribe();
    }
  }
}
