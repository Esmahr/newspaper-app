import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsapiserviceService } from './newsapiservice.service';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './component/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    CategoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
