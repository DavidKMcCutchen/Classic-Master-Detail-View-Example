import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APIsComponent } from './apis/apis.component';
import { ApiDetailsComponent } from './apis/api-details/api-details.component';
import { ApiListComponent } from './apis/api-list/api-list.component';
import { MaterialModule } from "@public-apis/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@public-apis/core-data";
import { CoreStateModule } from "@public-apis/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@public-apis/environment';
import { UiLoginModule } from '@public-apis/ui-login';
import { APIComponent } from './api/api.component';
import { ApiInfoComponent } from './api/api-info/api-info.component';

@NgModule({
  declarations: [AppComponent, APIsComponent, ApiDetailsComponent, ApiListComponent, ApiInfoComponent, APIComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
