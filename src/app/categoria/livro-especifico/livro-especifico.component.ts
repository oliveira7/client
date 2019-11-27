import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/livro';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-livro-especifico',
  templateUrl: './livro-especifico.component.html',
  styleUrls: ['./livro-especifico.component.css'],
  providers: [LivroEspecificoComponent]
})
export class LivroEspecificoComponent implements OnInit {

  livro$: Observable<Livro[]> = null;
  id: number;
  constructor(private categoriaService: CategoriaService, private livroService: LivroService, private _route: ActivatedRoute, private _router: Router) { }


  onSelect(livro){
    this._router.navigate(['/home', livro.ISBN])
  }

  ngOnInit() {
    this.livro$ = this._route.paramMap
    .pipe(
      tap((params: ParamMap) => this.id = +params.get('id')), 
      switchMap((params: ParamMap) => this.livroService.getSpecificBooks( +params.get('id'))));
  }
}
