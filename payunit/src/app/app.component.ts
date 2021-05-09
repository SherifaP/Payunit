import { Component } from '@angular/core';

export interface UserName{
  Id:number;
  name:string;
  paymentMethod:string;
  amount:number;
  status:string

}

const ELEMENT_DATA:UserName[]= [
  {Id:0, name: "Kingsley", paymentMethod: "mtn", amount: 7800 , status:"Success"},
 {Id:1, name: "Jude", paymentMethod: "paypal", amount: 4200, status:"Pending"},
 {Id:2, name: "Lopex", paymentMethod: "mtn", amount: 650, status:"Failed"},
 {Id:4, name: "Helio", paymentMethod: "mtn", amount: 450, status:"Success"},
 {Id:5, name: " George", paymentMethod: "orange", amount: 1000, status:"Pending"},
{Id:6, name: "Ekama", paymentMethod: "express_union", amount: 1800, status:"Failed"},
 {Id:7, name: "Irish", paymentMethod: "paypal", amount: 1300, status:"Success"},
 {Id:8, name: "Nissi", paymentMethod: "card", amount: 900, status:"Pending"},
 {Id:9, name: "Jeff", paymentMethod: "mtn", amount: 25, status:"Failed"},
 {Id:10, name: "Gerald", paymentMethod: "orange", amount: 550, status:"Success"},
 {Id:11, name: "Akono", paymentMethod: "card", amount: 810, status:"Pending"}
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payunit';

  displayedColumns:string[]=[ 'Id','name','LastName', 'amount','paymentMethod',  'status', 'profile'];

  dataSource = ELEMENT_DATA;
}
