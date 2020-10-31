import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DrinkService } from 'src/app/services/drink-service.service';
import { liquorList as importedLiquorList } from 'src/app/constants/liquors';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-basic-info-input',
  templateUrl: './basic-info-input.component.html',
  styleUrls: ['./basic-info-input.component.scss']
})
export class BasicInfoInputComponent implements OnInit {
  submitAttempted: boolean;
  liquorList: string[] = importedLiquorList;

  profile = new FormGroup({
    favoriteLiquor: new FormControl([''], [
      Validators.required
    ])}, {
    updateOn: 'submit'
  });

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.submitAttempted = false;
  }

  onSubmit(): void {
    this.submitAttempted = true;
    console.warn(this.profile.value);
    if(this.profile.valid){
      this.drinkService.getCocktails(this.profile.value.favoriteLiquor).subscribe();
    }
  }
}
