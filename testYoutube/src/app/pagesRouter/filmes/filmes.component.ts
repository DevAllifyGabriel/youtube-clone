import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {
  filmes: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let resp = this.http.get(
      'https://616af8b916e7120017fa117e.mockapi.io/api/v1/videos'
    );
    resp.subscribe((_filmes) => (this.filmes = _filmes));
  }
}
