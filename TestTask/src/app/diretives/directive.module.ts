import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegerInputDirective } from './directives/integer-input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntegerInputDirective],
  exports:[
    IntegerInputDirective
  ]
})
export class DirectiveModule { }
