import {NgModule} from "@angular/core";
import {MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class MaterialModule {

}
