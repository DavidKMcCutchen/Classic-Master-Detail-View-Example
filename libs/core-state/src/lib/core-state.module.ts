import { FeaturesAuthEffects } from './auth/auth.effects';
import { NotificationEffects } from './apis/apis.notification-effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@public-apis/core-data';
import { APIEffects } from './apis/apis.effects';
import { reducers } from ".";


const store_name = 'API Store';


const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([APIEffects, NotificationEffects, FeaturesAuthEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})

export class CoreStateModule {}