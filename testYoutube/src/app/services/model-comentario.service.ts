import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoemntarioList } from '../modolu/coemntario-list';
@Injectable({
  providedIn: 'root'
})
export class ModelComentarioService {

  emitiEvent = new EventEmitter();

  private list: Array<string> = [
 
  ]

  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  listComentarios(): Observable<Array<CoemntarioList>>{
    return this.http.get<Array<CoemntarioList>>(`${this.url}comentar`)
    .pipe(
      res => res,
      error => error
    )
  }

  foodListAdd(value: string): Observable<CoemntarioList>{
   return this.http.post<CoemntarioList>(`${this.url}comentar`, {comentar: value})
   .pipe(
     res => res,
     error => error
   )
  }

  foodAlert(value: CoemntarioList){
    return this.emitiEvent.emit(value);
  }

  foodListDelet(id: number):Observable<CoemntarioList>{
    return this.http.delete<CoemntarioList>(`${this.url}comentar/${id}`).
    pipe(
      res => res,
      error => error
    )
  }


}
