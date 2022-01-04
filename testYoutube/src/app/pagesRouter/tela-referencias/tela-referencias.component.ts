import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tela-referencias',
  templateUrl: './tela-referencias.component.html',
  styleUrls: ['./tela-referencias.component.scss'],
})
export class TelaReferenciasComponent implements OnInit {
  videos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let resp = this.http.get(
      'https://616af8b916e7120017fa117e.mockapi.io/api/v1/videos'
    );
    resp.subscribe((_videos) => (this.videos = _videos));
  }
}
