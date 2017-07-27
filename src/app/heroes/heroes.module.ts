import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent],
  providers: [HeroService]
})

export class HeroesModule {

}
