import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { PipeModule } from 'app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    Angular2FontawesomeModule,
    PipeModule,
    MaterialModule
  ],
  entryComponents: [
  ]
})
export class SharedBaseModule { }
