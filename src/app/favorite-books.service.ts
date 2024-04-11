import { Injectable } from '@angular/core';
import { Livro } from './Livros';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBooksService {
  private livrosFavoritos: Livro[] = [];
  private livrosFavoritosSubject = new BehaviorSubject<Livro[]>(this.livrosFavoritos);

  adicionarLivro(livro: Livro) {
    this.livrosFavoritos.push(livro);
    this.livrosFavoritosSubject.next(this.livrosFavoritos)
  }
  
  obterLivrosFavoritos(): Observable<Livro[]> {
    return this.livrosFavoritosSubject.asObservable();
  }

  constructor() { }

  
  }

