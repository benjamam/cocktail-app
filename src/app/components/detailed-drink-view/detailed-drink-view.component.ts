import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrinkService } from 'src/app/services/drink-service.service';
import { Cocktail } from '../drink-results/drink-results';

@Component({
  selector: 'app-detailed-drink-view',
  templateUrl: './detailed-drink-view.component.html',
  styleUrls: ['./detailed-drink-view.component.scss']
})
export class DetailedDrinkViewComponent implements OnInit {
  drinkId: string;
  drink$: Observable<Cocktail>;

  constructor(private route: ActivatedRoute, private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.drinkId = this.route.snapshot.paramMap.get('id');
    this.drink$ = this.drinkService.getDrinkById(this.drinkId).pipe(
      map(drinks => drinks.filter(d => d.id === this.drinkId)[0])
    );
  }

}
