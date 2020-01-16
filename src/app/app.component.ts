import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient.model';


const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Pizza Party';
  selectedPizza: Pizza;
  pizzas: Pizza[] = PIZZAS;
  user: User = {
    name: 'Broquet',
    firstname: 'Adam',
    birthday: '1989-12-20',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    age: null
  };
  ingredients: Ingredient[] = [
   {name: 'Tomate', image: 'tomate.jpg', weight: 60, price: 2},
   {name: 'Olive', image: 'olive.jpeg', weight: 10, price: 1}    
  ];
  selectedIngredients : Ingredient[] = [];

  constructor() {
    this.calculateAge();
  }

  private calculateAge(): void {
    let currentDate = Date.now(); // 2020-01-16 en timestamp (millisecondes)
    let birthDate = (new Date(this.user.birthday)).getTime(); // 1991-11-18 en timestamp (millisecondes)
    let timeDiff = currentDate - birthDate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    this.user.age = age;
  }
  

  onSelect(pizza: Pizza): void{
    console.log(pizza);
    this.selectedPizza = pizza;
  }
  selectIngredient(event){
    if(!this.selectedIngredients.includes(event)){
      this.selectedIngredients.push(event);
    }  
  }

  deleteIngredient(index: number){
    event.stopPropagation();
    this.selectedIngredients.splice(index, 1);
  }
  

}

