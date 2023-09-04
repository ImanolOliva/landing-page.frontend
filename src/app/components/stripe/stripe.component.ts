import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { UserServiceService } from 'app/service/user-service.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent{

  public payPalConfig?: IPayPalConfig;
  public mostrarContenido: boolean = false;


  constructor(){}

  ngOnInit(): void {
    this.initConfig();
  } 
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AWz6frmYnstu5ew25rznksW_nhmai3gSw_aMlTFFFiB9Sj0thfXp7EEADg-tu8O5FKDxFHT0kfE4sumV',
      createOrderOnClient: (data) => <ICreateOrderRequest>
      {  
        intent: 'CAPTURE',
        purchase_units: [{

          description: 'Donacion por 1 eur efectuado',
          amount: {
            currency_code: 'EUR',
            value: '1.00',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '1.00'
                
              }
              
            }
            
          },
          
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '1.00',
            },
            
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },   
      
      
      //aprobar  
      onApprove: (data, actions) => {

        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
       
      },
      //autorizar
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }
}


