import {NgModule} from "@angular/core";
import {MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule
  ]
})
export class MaterialItemsModule {}
