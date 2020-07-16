import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompunoComponent } from './compuno/compuno.component';
import { BarraDeNavComponent } from './barra-de-nav/barra-de-nav.component';
import { ItemComponent } from './item_muebles/item.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpModule } from '@angular/http'

import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import{AuthService} from '../app/service/auth.service'
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompunoComponent,
    BarraDeNavComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
