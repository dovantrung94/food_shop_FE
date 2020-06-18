import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';



@NgModule({
  declarations: [HomePageComponent, HomeDetailComponent],
  imports: [
    CommonModule,HomeRoutingModule
  ]
})
export class HomeModule { }
