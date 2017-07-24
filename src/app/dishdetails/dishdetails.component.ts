import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {

  @Input()
  dish:Dish;

  //selectedDish:Dish = DISHES[0];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
