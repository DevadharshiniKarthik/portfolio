import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,  
    RouterModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    ModalModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
