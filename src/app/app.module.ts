import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localFr)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByDatePipe } from './pipe/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    SortByDatePipe
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
