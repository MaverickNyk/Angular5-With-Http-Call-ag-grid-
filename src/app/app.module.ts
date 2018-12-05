import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { GridComponentComponent } from './Components/grid-component/grid-component.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import {HttpModule} from '@angular/http';
import { GridService } from './Components/grid-component/grid.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents(
      [GridComponentComponent]
    )
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
