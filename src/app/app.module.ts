import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PrincipalComponent } from './shared/components/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalLoginComponent } from './shared/components/modal-login/modal-login.component';
import { ModalAtendimentoComponent } from './shared/components/modal-atendimento/modal-atendimento.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ModalLoginComponent,
    ModalAtendimentoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
