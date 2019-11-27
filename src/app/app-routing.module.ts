import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { LivroEspecificoComponent } from './categoria/livro-especifico/livro-especifico.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: DetalheLivroComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria/:id', component: LivroEspecificoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'busca/:value', component: BuscaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
