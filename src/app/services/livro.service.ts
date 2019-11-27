import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root',
  })
export class LivroService {

  constructor(private http:HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('api/index')
  }

  getSpecificBooks(id: number): Observable<Livro[]> {
    const url = `api/book-category/${id}`;
    return this.http.get<Livro[]>(url)
  }

  getBookSpecific(id: string): Observable<Livro> {
    const url = `api/book-detail/${id}`;
    return this.http.get<Livro>(url)
  }

  getBookSearch(value: string): Observable<Livro[]> {
    const url = `api/search-book/${value}`;
    return this.http.get<Livro[]>(url)
  }
}
