import { Component, OnInit } from '@angular/core';
import { ModelComentarioService } from 'src/app/services/model-comentario.service';

@Component({
  selector: 'app-comentarios-add',
  templateUrl: './comentarios-add.component.html',
  styleUrls: ['./comentarios-add.component.scss']
})
export class ComentariosAddComponent implements OnInit {

  constructor(private modelComentarioService: ModelComentarioService) { }

  ngOnInit(): void {
  }

  public listAddItem(value: string){
    return this.modelComentarioService.foodListAdd(value)
  }

}
