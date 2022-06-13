import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataModel } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  displayOrders!: DataModel[];
  VAT = 2.87;
  total!: number;
  dhlDelivery!: boolean;
  freeDeliveryMethod!: boolean;
  orders!: DataModel[];
  isDisable!: boolean;
  able!: boolean;
  subTotal!: any;
  orderDetails!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    //Form validations
    this.orderDetails = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      monthYear: ['', Validators.required],
      cvv: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],

      cardHolder: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
    });

    this.displayOrders = this.dataService.getOrders();

    //For Calculating subtotal and total prices.
    this.subTotal =
      this.displayOrders[0].price +
      this.displayOrders[1].price +
      this.displayOrders[2].price;
    this.total = this.subTotal + this.VAT;
  }

  get form() {
    return this.orderDetails.controls;
  }

  // Method For toggling delivery state
  onDhlDelivery(value: boolean) {
    this.dhlDelivery = value;
    if (this.dhlDelivery) {
      this.total = this.total + 12.0;
      this.isDisable = true;
      console.log(`Delivery By: DHL DELIVERY`);
    } else {
      this.total = this.total - 12.0;
      this.isDisable = false;
    }
  }

  freeDelivery(value: boolean) {
    this.freeDeliveryMethod = value;
    if (this.freeDeliveryMethod) {
      this.able = true;
      console.log(`Delivery By: FedEx DELIVERY`);
    }else{
      this.able = false
    }
  }

  // Method for Form Submitting
  onSubmit() {
    console.log(`ORDER DETAILS FOR ITEM 1.
    NAME: ${this.displayOrders[0].name}. PRICE: ${this.displayOrders[0].price},
    ORDER DETAILS FOR ITEM 1.
    NAME: ${this.displayOrders[1].name}. PRICE: ${this.displayOrders[1].price}
    ORDER DETAILS FOR ITEM 2.
    NAME: ${this.displayOrders[2].name}. PRICE: ${this.displayOrders[2].price}`);
    console.log(
      `PAYMENT DETAILS: EMAIL: ${this.orderDetails.value.email} CARD NUMBER: ${this.orderDetails.value.cardNumber} EXPIREY DATE: ${this.orderDetails.value.monthYear} CVV: ${this.orderDetails.value.cvv} CARD HOLDER:${this.orderDetails.value.cardHolder} BILLING ADDRESS: ${this.orderDetails.value.monthYear} COUNTRY: ${this.orderDetails.value.country} ZIPCODE: ${this.orderDetails.value.zipCode} `
    );
    console.log(`TOTAL ORDER: ${this.total}`);
    this.orderDetails.reset();
  }
}
