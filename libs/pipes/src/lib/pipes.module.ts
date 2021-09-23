import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorKeysPipe } from './pipes/error-keys.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorKeysPipe],
  exports: [ErrorKeysPipe]
})
export class PipesModule {}
