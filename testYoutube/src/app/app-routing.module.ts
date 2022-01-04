import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './pagesRouter/login-cadastro/login-cadastro.component';
import { TelaVideosComponent } from './pagesRouter/tela-videos/tela-videos.component';
import { YoutubeTestComponent } from './youtube-test/youtube-test.component';

const routes: Routes = [
  {path: '' , component: YoutubeTestComponent, pathMatch: 'full'},
  {path: 'inicio', component: YoutubeTestComponent},
  {path: 'loginCadastro', component: LoginCadastroComponent },
  {path: 'video/:id', component: TelaVideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
