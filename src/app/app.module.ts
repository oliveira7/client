import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { LivroEspecificoComponent } from './categoria/livro-especifico/livro-especifico.component';
import { BuscaComponent } from './busca/busca.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CarrinhoComponent,
    HomeComponent,
    PagenotfoundComponent,
    DetalheLivroComponent,
    LivroEspecificoComponent,
    BuscaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
