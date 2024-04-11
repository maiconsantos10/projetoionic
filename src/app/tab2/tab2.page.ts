import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livros';
import { FavoriteBooksService } from '../favorite-books.service';
import { GradeComponent } from '../components/grade/grade.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{ 
  livrosFavoritos: Livro[] = [];

  constructor(private favoriteBooksService: FavoriteBooksService) {}

    ngOnInit() {
      this.favoriteBooksService.obterLivrosFavoritos().subscribe(livros => {
        this.livrosFavoritos = livros;
      });
    }
    Clicou(livro: Livro): void {
      alert(`Titulo: ${livro.titulo}\nAutor: ${livro.autor}\nCapa: ${livro.capa}\nDescrição: ${livro.descricao}`);
    }

}
