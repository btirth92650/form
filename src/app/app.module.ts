import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RFormsComponent } from './r-forms/r-forms.component';
import { FormsModule } from '@angular/forms';
import { BavkgroundDirective } from './Directives/background.directive';
import { AppUnlessDirective } from './Directives/app-unless.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RFormsComponent,
    BavkgroundDirective,
    AppUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
