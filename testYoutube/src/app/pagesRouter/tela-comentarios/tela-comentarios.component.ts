import { Component, OnInit } from '@angular/core';
import { CoemntarioList } from 'src/app/modolu/coemntario-list';
import { ModelComentarioService } from 'src/app/services/model-comentario.service';

@Component({
  selector: 'app-tela-comentarios',
  templateUrl: './tela-comentarios.component.html',
  styleUrls: ['./tela-comentarios.component.scss']
})
export class TelaComentariosComponent implements OnInit {


  nome: string = ''
  test: any

  foodComentario: Array<CoemntarioList> = [];

  constructor(private modelComentarioService:ModelComentarioService) {  }


  ngOnInit(): void {
    this.modelComentarioService.listComentarios().subscribe(
      res => this.foodComentario = res,
      error => error 
    );

    this.modelComentarioService.emitiEvent.subscribe(
      res => {
        console.log(` Voce acabou de comentar => ${res.nome}`)
        return this.foodComentario.push(res);
      }
    );
  }


  foodListDelet(id: number){
    return this.modelComentarioService.foodListDelet(id).subscribe(
      res =>{
        this.foodComentario = this.foodComentario.filter(
          comentar => {
            return id !== comentar.id
          }
        )
      },
      error => error
    )
  }

  testMerda(value: string ){
    this.modelComentarioService.foodListAdd(value).subscribe(
      res => {
        return console.log(res)
      }
    )
  }

 
}
