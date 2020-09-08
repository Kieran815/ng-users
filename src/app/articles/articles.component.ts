import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      (response) => {
        this.articles = response;
        console.log(this.articles)
      }
    )
  }
}
