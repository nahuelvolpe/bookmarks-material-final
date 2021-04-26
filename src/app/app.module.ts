import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EnlaceService } from './enlace.service';
import { DemoMaterialModule } from './material-module';

import 'hammerjs';


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    DemoMaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) 
    ],
  declarations: [ 
    AppComponent, 
    SearchComponent 
    ],
  providers: [EnlaceService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
