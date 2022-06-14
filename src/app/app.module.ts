import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion'; 
import {MenuItem} from 'primeng/api';    
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pregunta1Component } from './components/pregunta1/pregunta1.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
