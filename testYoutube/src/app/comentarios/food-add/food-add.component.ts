import { Component, OnInit } from '@angular/core';
import { ModelComentarioService } from 'src/app/services/model-comentario.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private modelComentarioService:ModelComentarioService) { }

  ngOnInit(): void {
  }

  listAddItem(value: string){
    return this.modelComentarioService.foodListAdd(value).subscribe(
      res => this.modelComentarioService.foodAlert(res),
      error => error
    );
  }

 

}
