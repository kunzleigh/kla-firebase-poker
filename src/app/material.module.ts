import {NgModule} from "@angular/core";
import {MdButtonModule, MdCardModule, MdIconModule, MdProgressBarModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule
  ]
})
export class MaterialModule {

}
