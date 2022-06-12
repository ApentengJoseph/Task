import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'payment-page', pathMatch: 'full'},
  {path: 'payment-page', component: PaymentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
