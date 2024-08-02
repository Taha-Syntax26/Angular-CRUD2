import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  constructor(private http: HttpClient){

  }
  products: { id: number,
    pName: string, 
    desc: string, 
    price: string }[] = [];
  nextId = 1;

  onProductCreate(product: { pName: string, desc: string, price: string }) {
    const newProduct = { id: this.nextId++, ...product };
    this.products.push(newProduct);
    console.log(this.products);
    this.http.post('https://crud-73a51-default-rtdb.firebaseio.com/products.json', this.products)
    .subscribe((res) =>{
      console.log(res)
    })
  }
}
