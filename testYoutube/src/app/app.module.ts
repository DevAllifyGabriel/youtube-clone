import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeTestComponent } from './youtube-test/youtube-test.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './pagesRouter/filmes/filmes.component';
import { LoginCadastroComponent } from './pagesRouter/login-cadastro/login-cadastro.component';
import { TelaVideosComponent } from './pagesRouter/tela-videos/tela-videos.component';
import { TelaReferenciasComponent } from './pagesRouter/tela-referencias/tela-referencias.component';
import { TelaComentariosComponent } from './pagesRouter/tela-comentarios/tela-comentarios.component';
import { FormsModule } from '@angular/forms';
import { ComentariosAddComponent } from './comentarios/comentarios-add/comentarios-add.component';
import { FoodAddComponent } from './comentarios/food-add/food-add.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubeTestComponent,
    FilmesComponent,
    LoginCadastroComponent,
    TelaVideosComponent,
    TelaReferenciasComponent,
    TelaComentariosComponent,
    ComentariosAddComponent,
    FoodAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
