import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_ENVIRONMENT } from './apis.token';
import { APIEnvironment } from "./apis.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: APIEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: API_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
