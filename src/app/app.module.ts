import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormatCodeModule } from 'projects/format-code/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormatCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
