import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { AccountDetailComponent } from './account-detail';
import { AccountsComponent } from './accounts';
import { AccountSearchComponent } from './account-search';
import { MessagesComponent } from './messages';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';

import { DynamicFormComponent } from './dynamic-form';
import { DynamicFormQuestionComponent } from './dynamic-form-question';


// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './helpers';
import { AlertService, AuthenticationService, UserService, InMemoryDataService } from './_services';
import { HomeComponent } from './home';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    AccountDetailComponent,
    MessagesComponent,
    AccountSearchComponent,

    DynamicFormComponent,
    DynamicFormQuestionComponent,

    UserComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    HomeComponent,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
 }
