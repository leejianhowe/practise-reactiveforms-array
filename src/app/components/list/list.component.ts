import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../item.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cartItem: CartItem[];

  constructor() {}

  ngOnInit(): void {}
}
