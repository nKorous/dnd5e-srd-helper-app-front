import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//DX
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { AppComponent } from './app.component';
import { SpellsHomeComponent } from './components/spells-home/spells-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material

    //DX
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
