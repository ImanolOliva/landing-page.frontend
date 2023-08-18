import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { CardsComponent } from './cards/cards.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { RedesComponent } from './redes/redes.component';
import { RedSocialComponent } from './red-social/red-social.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ThankyouComponent } from './thankyou/thankyou.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule,
        HttpClientModule,
        

      ],
    declarations: [
        ComponentsComponent,
        CardsComponent,
        FormularioComponent,
        FooterComponent,
        RedesComponent,
        RedSocialComponent,
        ThankyouComponent,
       
       
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
