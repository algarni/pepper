import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBdMu_o54utDkwR0YJSlFszQTSZ8iIMmOE",
  authDomain: "pepper-d218e.firebaseapp.com",
  databaseURL: "https://pepper-d218e.firebaseio.com",
  storageBucket: "pepper-d218e.appspot.com",
  messagingSenderId: "137162589373"

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
