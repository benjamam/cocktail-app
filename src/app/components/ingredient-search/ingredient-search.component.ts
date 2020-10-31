import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DrinkService } from 'src/app/services/drink-service.service';

@UntilDestroy()
@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.scss']
})
export class IngredientSearchComponent implements OnInit {

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
  }

  searchAll(): void {
    this.drinkService.getAllDrinks().subscribe();
  }
}
