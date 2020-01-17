import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { User } from '../models/user.model';
import { Ingredient } from '../models/ingredient.model';
import { PizzaService } from '../pizza.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedPizza: Pizza;
  pizzas: Pizza[] = [];
  number = 2;
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

  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit(){
    this.pizzaService.getPizzas().then(
      pizzas => this.pizzas = pizzas
    );
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
