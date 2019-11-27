import { tap, switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../services/livro.service';
import { CategoriaService } from '../services/categoria.service';
import { Livro } from '../models/livro';
import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment"

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css'],
  providers: [DetalheLivroComponent]
})
export class DetalheLivroComponent implements OnInit {
  livro: Livro

  constructor(private categoriaService: CategoriaService, private livroService: LivroService, private _router: Router, private _route: ActivatedRoute) { }

  public LivroId;

  ngOnInit() {
    this.LivroId = this._route.snapshot.paramMap.get('id');
    this.livroService.getBookSpecific(this.LivroId).subscribe(livro =>(this.livro = livro));
  }

  onAddCarrinho(livro){
    var novoLivro = {
      'id': livro.ISBN,
      'title': livro.title, 
      'qty': 1, 
      'price': +((livro.price - (livro.price * 0.2)).toFixed(2)),
      'total': +((livro.price - (livro.price * 0.2)).toFixed(2))
    };
    
    if(typeof environment.Compras.find(compra => compra.title === livro.title) !== 'undefined') {
      const compra  = environment.Compras.find(compra => compra.title === livro.title);
      compra.qty    = +(compra.qty + 1);
      compra.total  = +((compra.total + compra.price).toFixed(2));
    }else{
      environment.Compras.push(novoLivro);
    }

    environment.Frete = +(environment.Frete + 1);
    environment.TotalCompra = +(environment.TotalCompra + novoLivro.price);
  } 
}
