import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SystemErrorComponent } from './system-error/system-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent, SystemErrorComponent, IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
