import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-test',
  templateUrl: './youtube-test.component.html',
  styleUrls: ['./youtube-test.component.scss']
})
export class YoutubeTestComponent implements OnInit {

  constructor() { }

  public aplicar: Array<{nome: string}> = [ {nome: 'Tudo'},
    {nome: 'Lista de Reprodução'},
    {nome: 'Regis Danese'},
    {nome: 'Canto'},
    {nome: 'Musica brasileira'},
    {nome: 'violão acustico'},
    {nome: 'Musica'},
    {nome: 'Ao Vivo'},
    {nome: 'Chill out'},
    {nome: 'Jazz'}

  ]

  ngOnInit(): void {
  }

}
