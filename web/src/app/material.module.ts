import {NgModule} from "@angular/core";
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdExpansionModule, MdFormFieldModule, MdGridListModule,
  MdIconModule,
  MdInputModule, MdListModule,
  MdProgressBarModule, MatProgressSpinnerModule,
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
    MdGridListModule,
    MatProgressSpinnerModule
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
    MdGridListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {

}
