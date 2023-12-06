import { Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    {path: 'tarea', component: TareaComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'index', component: AppComponent},
    { path: '**', component: PageNotFoundComponent }
];
