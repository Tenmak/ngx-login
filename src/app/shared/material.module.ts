import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatSnackBarModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
})
export class MaterialModule { }
