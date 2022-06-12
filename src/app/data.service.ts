import { Injectable } from '@angular/core';
import { DataModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getOrders(){
    return this.Orders;
  }

  Orders:DataModel[] = [{
    image: '../assets/image-1.png',
    price: 250.4,
    name: "Nike Shoe quality for sale",
    discount: 300
  }, {
    image: '../assets/image-2.png',
    price: 149.98,
    name: "Addidas shoe with quality",
    discount: 160.763
  },
  {
    image: '../assets/image.png',
    price: 130.4,
    name: "Nike Shoe airmax shoe with",
    discount: 189.45
  },
]


}






