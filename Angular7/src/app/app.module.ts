import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validator } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailComponent } from './user-details/user-detail/user-detail.component';
//import { UserDetailListComponent } from './user-details/user-detail/user-detail-list.component';
import { UserDetailService } from './shared/user-detail.service';




@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailComponent,
    //UserDetailListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
    
  ],
  providers: [UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
