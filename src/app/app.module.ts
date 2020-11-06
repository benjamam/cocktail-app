import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkSearchComponent } from './components/drink-search/drink-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInfoInputComponent } from './components/basic-info-input/basic-info-input.component';
import { DrinkResultsComponent } from './components/drink-results/drink-results.component';
import { IngredientSearchComponent } from './components/ingredient-search/ingredient-search.component';
import { DetailedDrinkViewComponent } from './components/detailed-drink-view/detailed-drink-view.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkSearchComponent,
    BasicInfoInputComponent,
    DrinkResultsComponent,
    IngredientSearchComponent,
    DetailedDrinkViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
