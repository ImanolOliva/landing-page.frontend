import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes =[
    { path: 'index',                component: ComponentsComponent },
    {path: 'formulario', component:FormularioComponent},
    {path:'', redirectTo:'index'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
