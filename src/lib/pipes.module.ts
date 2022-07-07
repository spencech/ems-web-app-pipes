import { NgModule } from '@angular/core';
import { SafePipe, TokensPipe, PropsPipe } from '.';

export * from "./classes.pipes";

@NgModule({
  declarations: [
    SafePipe, TokensPipe, PropsPipe
  ],
  imports: [
  ],
  exports: [
    SafePipe, TokensPipe, PropsPipe
  ]
})
export class PipesModule { }
