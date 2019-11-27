import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../services/livro.service';
import { Livro } from '../models/livro';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  livros: Livro[]

  constructor(private livroService: LivroService, private _router: Router, private _route: ActivatedRoute) { }
  
  public LivroValue;

  onSelect(livro){
    this._router.navigate(['/home', livro.ISBN])
  }
  
  ngOnInit() {
    this.LivroValue = this._route.snapshot.paramMap.get('value');
    this.livroService.getBookSearch(this.LivroValue).subscribe(livros =>(this.livros = livros));
  }

}
