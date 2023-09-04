import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ComponentsComponent } from "./components.component";
import { CardsComponent } from "./cards/cards.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { FooterComponent } from "./footer/footer.component";
import { RedesComponent } from "./redes/redes.component";
import { RedSocialComponent } from "./red-social/red-social.component";
import { ThankyouComponent } from "./thankyou/thankyou.component";
import { StripeComponent } from "./stripe/stripe.component";
import {NgxPayPalModule} from 'ngx-paypal'




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPayPalModule
    ],
    declarations: [
        ComponentsComponent,
        CardsComponent,
        FormularioComponent,
        FooterComponent,
        RedesComponent,
        RedSocialComponent,
        ThankyouComponent,
        StripeComponent,       
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
