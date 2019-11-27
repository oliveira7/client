import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LivroService]
})
export class HomeComponent implements OnInit {
  livros: Livro[]

  constructor(private livroService: LivroService, private http: HttpClient, private _router: Router) { }

  onSelect(livro){
    this._router.navigate(['/home', livro.ISBN])
  }

  ngOnInit() {
    this.getLivros()
  }

  getLivros(): void{
    this.livroService.getLivros().subscribe(livros =>(this.livros = livros))
  }

}
