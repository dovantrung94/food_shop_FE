import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginGuard } from '../guard/login.guard';
import { IndexComponent } from './index.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [LoginGuard],
        component: IndexComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'forgot',
                component: ForgotComponent
            },
            {
                path: 'singup',
                component: SignupComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 
export class  IndexRoutingModule{}  
