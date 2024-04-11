import { Component } from '@angular/core';
import { Livro } from '../Livros';
import { FavoriteBooksService } from '../favorite-books.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private favoriteBooksService: FavoriteBooksService) {}

  testarServico() {
    const livroTeste: Livro = {
      id: 1,
      titulo: 'Testando',
      autor: 'Alguém',
      capa: 'assets/icon/nuncasaiasozinho.jpg',
      descricao: ''
    }

    this.favoriteBooksService.adicionarLivro(livroTeste);

    alert('Livro adicionado aos favoritos !');
  }

}
