import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { cocktailSearchURL, cocktailListURL, cocktailFilterURL, cocktailLookupURL } from '../assets/urls';
import { Cocktail } from '../components/drink-results/drink-results';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinkServiceSource: BehaviorSubject<Cocktail[]> = new BehaviorSubject([]);
  public drinkSource$ = this.drinkServiceSource.asObservable();

  constructor(private http: HttpClient) { }

  getCocktails(liquor: string): Observable<Cocktail[]> {
    return this.makeDrinkRequest(cocktailSearchURL, 's', liquor);
  }

  getAllDrinks(): Observable<Cocktail[]> {
    return this.makeDrinkRequest(cocktailFilterURL, 'a', 'alcoholic');
  }

  getDrinkById(id: string): Observable<Cocktail[]>{
    return this.makeDrinkRequest(cocktailLookupURL, 'i', id);
  }

  private makeDrinkRequest(cocktailURL: string, query: string, param: string): Observable<Cocktail[]> {
    let fullUrl = `${cocktailURL}${query}=${param}`;
    return this.http.get<Cocktail[]>(fullUrl).pipe(
      map((r: any) => r.drinks),
      map((items: any[]) => items.map((item: any) => {
        let cocktail = {
          id: item.idDrink,
          name: item.strDrink,
          instructions: item.strInstructions,
          imgUrl: item.strDrinkThumb,
          ingredients: []
        } as Cocktail;

        let count = 1;
        let ingredient = `strIngredient${count}`;
        while (item[ingredient]) {
          cocktail.ingredients.push(item[ingredient]);
          count++;
          ingredient = `strIngredient${count}`;
        }

        return cocktail;
      })),
      tap(resp => this.drinkServiceSource.next(resp))
    );
  }

}
