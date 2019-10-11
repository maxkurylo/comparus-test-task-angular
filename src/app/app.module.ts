import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { ScoreComponent } from './score/score.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { GithublinkComponent } from './githublink/githublink.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    ScoreComponent,
    MenuComponent,
    ModalComponent,
    GithublinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
