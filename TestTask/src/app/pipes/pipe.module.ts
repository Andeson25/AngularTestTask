import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomFloatPipe} from './pipes/custom-float.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomFloatPipe],
  exports: [
    CustomFloatPipe
  ]
})
export class PipeModule {
}
