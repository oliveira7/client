import { Router } from '@angular/router';
import { environment } from "../../environments/environment"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private compras = environment.Compras;
  private totalCompras = +(environment.TotalCompra).toFixed(2);
  private frete = environment.Frete;

  constructor(private _router: Router) { }

  onSelect(livroId) {
    this._router.navigate(['/home', livroId])
  }

  ngOnInit() {
  }

  onAddCarrinho(livro){
    var novoLivro = {
      'id': livro.ISBN,
      'title': livro.title, 
      'qty': 1, 
      'price': +((livro.price - (livro.price * 0.2)).toFixed(2)),
      'total': +((livro.price - (livro.price * 0.2)).toFixed(2))
    };
    
    if(typeof environment.Compras.find( compra => compra.title === livro.title) !== 'undefined') {
      var compra    = environment.Compras.find( compra => compra.title === livro.title);
      compra.qty    = +(compra.qty + 1);
      compra.total  = +((compra.total + compra.price).toFixed(2));
    }else{
      environment.Compras.push(novoLivro);
    }

    environment.Frete = environment.Frete + 1;
    this.frete = environment.Frete;
    environment.TotalCompra = +(environment.TotalCompra + compra.price);
    this.totalCompras       = +(environment.TotalCompra);
  } 

  onRemoveCarrinho(livro){
    var index = environment.Compras.indexOf(livro);
    if (index > -1) {
      var compra = environment.Compras.find( compra => compra.title === livro.title);
      if(compra.qty <= 1) {
        environment.Compras.splice(index, 1);
      }else{
        compra.qty   = +(compra.qty - 1);
        compra.total = +((compra.total - compra.price).toFixed(2));
      }

      environment.Frete = +(environment.Frete - 1);
      this.frete = +(environment.Frete);
      environment.TotalCompra = +(environment.TotalCompra - compra.price);
      this.totalCompras       = +(environment.TotalCompra);
    }
  }
}
