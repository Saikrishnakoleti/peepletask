import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'    

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurousalComponent } from './curousal/curousal.component';
import { ImgServiceService } from './curousal/img-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CurousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [ImgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
