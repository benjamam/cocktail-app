import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drink-search',
  templateUrl: './drink-search.component.html',
  styleUrls: ['./drink-search.component.scss']
})
export class DrinkSearchComponent implements OnInit {
  drinkSearch = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  preset(drinkVal: string): void {
    console.log(drinkVal);

    this.drinkSearch.setValue(drinkVal);
  }

}
