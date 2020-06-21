import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuLeftComponent } from './common/menu-left/menu-left.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'BASE_URL',
    useFactory: getBaseUrl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl(){
  return 'http://localhost:8080/';
}
