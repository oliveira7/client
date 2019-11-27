import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
  })
export class CategoriaService {

  constructor(private http:HttpClient) { }

  // specificBooks = new EventEmitter<number>();

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('api/books-category')
  }
}
