import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { FeaturesComponentComponent } from './features-component/features-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ServiceDetailComponentComponent } from './service-detail-component/service-detail-component.component';
import { PricingComponentComponent } from './pricing-component/pricing-component.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ContactDetailComponentComponent } from './contact-detail-component/contact-detail-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { TradingAccountComponentComponent } from './trading-account-component/trading-account-component.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponentComponent },
  { path: 'services', component: ServiceDetailComponentComponent },
  { path: 'pricing', component: PricingComponentComponent },
  { path: 'payment', component: PaymentComponentComponent },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'contact', component: ContactDetailComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'tradingAccount', component: TradingAccountComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    WelcomeComponentComponent,
    ServiceComponentComponent,
    FeaturesComponentComponent,
    ContactComponentComponent,
    ServiceDetailComponentComponent,
    PricingComponentComponent,
    PaymentComponentComponent,
    RegisterComponentComponent,
    ContactDetailComponentComponent,
    AboutComponentComponent,
    TradingAccountComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
