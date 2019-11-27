import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[]
  livros: Livro[]

  constructor(private categoriaService: CategoriaService, private livroService: LivroService, private http: HttpClient, private _router: Router) { }
 
  onSelectEspecifico(categoria){
    this._router.navigate(['/categoria', categoria.CategoryID])
  }

  ngOnInit() {
    this.getCategoria()
  }

  getCategoria(): void{
    this.categoriaService.getCategorias().subscribe(categorias =>( this.categorias = categorias))
  }
}
