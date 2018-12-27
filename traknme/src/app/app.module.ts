import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { ServiceService } from './shared/service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InMemPointsService } from './shared/in-memory-database';
import { Teste1Component } from './pages/teste1/teste1.component';
import { Teste2Component } from './pages/teste2/teste2.component';
import { routing }        from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Teste1Component,
    Teste2Component
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmDirectionModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPointsService),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }