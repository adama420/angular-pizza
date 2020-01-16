import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { Author } from './models/author.model';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

const AUTHORS : Author[] = [
  {fname: "Adam",
  lname: "Broquet",
  birth: 30,
  avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"}
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
  authors: Author[] = AUTHORS;
  typedAuthor: Author;

  onSelect(pizza: Pizza): void{
    console.log(pizza);
    this.selectedPizza = pizza;
  }
  onKeyUp(author: Author): void{
    this.typedAuthor = author;
  }
}
