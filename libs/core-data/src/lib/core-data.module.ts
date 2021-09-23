import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeaturesAuthGuard } from './services/authentication/auth-guard.service';
import { TokenInterceptor } from './services/authentication/token-interceptor.service';
import { FeaturesUnAuthGuard } from './services/authentication/unauth-guard.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    FeaturesAuthGuard,
    FeaturesUnAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class CoreDataModule {}
