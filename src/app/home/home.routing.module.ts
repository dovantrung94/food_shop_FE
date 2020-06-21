import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from '../index/login/login.component';
import { HomePageComponent } from '../index/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { HomeDetailComponent } from './home-detail/home-detail.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dardboard',
                loadChildren: () => import('./dardboard/dardboard.module').then(m => m.DardboardModule)
            },
            {
                path: '',
                component: HomeDetailComponent
            },
            {
                path: 'product',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
            },
            {
                path: 'user',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
