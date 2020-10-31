import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Console } from 'console';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DrinkService } from 'src/app/services/drink-service.service';
import { Cocktail } from './drink-results';

@UntilDestroy()
@Component({
  selector: 'app-drink-results',
  templateUrl: './drink-results.component.html',
  styleUrls: ['./drink-results.component.scss']
})
export class DrinkResultsComponent implements OnInit {
  drinkResults$: Observable<Cocktail[]>;

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkResults$ = this.drinkService.drinkSource$.pipe(
      tap(r => console.warn(r))
    );
  }

  searchId(id: string): void {
    console.warn(id);
    this.drinkService.getDrinkById(id).subscribe();
  }

}
