import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormModule } from 'projects/custom-form/src/public_api';
import { FormatCodeModule } from 'projects/format-code/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomFormModule, FormatCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
