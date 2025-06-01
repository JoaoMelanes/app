import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCadastro } from './components/page-cadastro/page-cadastro';

const routes: Routes = [
  {
    path:'register',
    component: PageCadastro,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
