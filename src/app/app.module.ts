import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.mpodule';
import { CuadrosPageModule } from './cuadros/cuadros.module';
=======
import { CoreModule } from './core/core.module';
import { HomePageModule } from './home/home.module';
import { CuadrosModule } from './cuadros/cuadros.module';
import { SharedModule } from './shared/shared.module';
>>>>>>> dev

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, CuadrosPageModule],
=======
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    HomePageModule,
    CuadrosModule,
    SharedModule,
  ],
>>>>>>> dev
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}








