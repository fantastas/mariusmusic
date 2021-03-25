import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';







const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatListModule,
  
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents,],
})
export class MaterialModule { }
