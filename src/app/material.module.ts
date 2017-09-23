import {NgModule} from "@angular/core";
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdExpansionModule, MdFormFieldModule, MdIconModule,
  MdInputModule, MdListModule,
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
    MdCheckboxModule,
    MdChipsModule,
    MdListModule
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
    MdCheckboxModule,
    MdChipsModule,
    MdListModule
  ]
})
export class MaterialModule {

}
