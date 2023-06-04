import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order-model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  visible: string = '';
  order!: OrderModel;
  id: string = '';
  name: string = 'name';
  link: string = '';
  disCount: number = 0;

  constructor() {

    this.name = 'test1';
  }
  ngOnInit(): void {
    this.name = 'test';

  }

  submit(){
    alert(this.name)
  }

}
