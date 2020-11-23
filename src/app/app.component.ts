import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cartItem: CartItem[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<CartItem[]>('http://localhost:3000/cart')
      .subscribe((data) => (this.cartItem = data));
  }
}
