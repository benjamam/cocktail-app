import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
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
  wasResults: boolean;
  constructor(private drinkService: DrinkService, private route: Router) { }

  ngOnInit(): void {
    this.drinkResults$ = this.drinkService.drinkSource$.pipe(
      tap(resp => this.wasResults = resp.length > 0)
    );
  }

  searchId(drinkId: string): void {
    this.route.navigate(['/drink', drinkId]);
  }

  filter(event: KeyboardEvent): void {
    let searchVal = (event.target as HTMLInputElement).value.toLowerCase().trim();
    console.log(searchVal);

    this.drinkResults$ = this.drinkService.filter(searchVal);
  }

}
