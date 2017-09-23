import {NgModule} from "@angular/core";
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdExpansionModule, MdFormFieldModule, MdGridListModule,
  MdIconModule,
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
    MdListModule,
    MdGridListModule
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
    MdListModule,
    MdGridListModule
  ]
})
export class MaterialModule {

}
