import {NgModule} from "@angular/core";
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdExpansionModule, MdFormFieldModule, MdIconModule, MdInputModule,
  MdProgressBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdInputModule,
    MdCheckboxModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressBarModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdInputModule,
    MdCheckboxModule
  ]
})
export class MaterialModule {

}
