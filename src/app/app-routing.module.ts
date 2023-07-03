import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {BusinessComponent} from './business/business.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
import {GeneralComponent} from './general/general.component';
import {HealthComponent} from './health/health.component';
import {ScienceComponent} from './science/science.component';
import {SportsComponent} from './sports/sports.component';
import {TechnologyComponent} from './technology/technology.component';
import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component'
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'business.component', component:BusinessComponent},
  {path: 'entertainment.component', component:EntertainmentComponent},
  {path: 'general.component', component:GeneralComponent},
  {path: 'health.component', component:HealthComponent},
  {path: 'science.component', component:ScienceComponent},
  {path: 'sports.component', component:SportsComponent},
  {path: 'technology.component', component:TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



