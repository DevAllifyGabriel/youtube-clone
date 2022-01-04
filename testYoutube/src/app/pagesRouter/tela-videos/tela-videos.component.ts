import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-videos',
  templateUrl: './tela-videos.component.html',
  styleUrls: ['./tela-videos.component.scss'],
})
export class TelaVideosComponent implements OnInit {
  public recomends: any;
  public info: any;

  public likeUm: number = 800;
  public dislikeum: number = 40;

  public date = new Date();

  public inscreverse: number = 400;

  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => this.videoInfo(params['id']));
  }

  ngOnInit(): void {
    let resp = this.http.get(
      'https://616af8b916e7120017fa117e.mockapi.io/api/v1/videos'
    );
    resp.subscribe((_filmes) => (this.recomends = _filmes));
  }

  videoInfo(id: string) {
    let resp = this.http.get(
      `https://616af8b916e7120017fa117e.mockapi.io/api/v1/videos/${id}`
    );
    resp.subscribe((_info) => (this.info = _info));
  }

  public like() {
    this.likeUm += 1;
  }
  public dislike() {
    this.dislikeum += 1;
  }

  public incrito() {
    this.inscreverse += 1;
  }
}
