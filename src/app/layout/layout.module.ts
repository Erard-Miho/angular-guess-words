import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { BuiltinGameComponent } from './builtin-game/builtin-game.component';
import { ShowWordsComponent } from './show-words/show-words.component';
import {FormsModule} from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [LayoutComponent, BuiltinGameComponent, ShowWordsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    CountdownModule,
  ]
})
export class LayoutModule { }
