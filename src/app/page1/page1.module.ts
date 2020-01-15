import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';

import { Page1Page } from './page1.page';
import { ComponentsModule} from '../components/components.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Page1PageRoutingModule
  ],
  declarations: [Page1Page]
})
export class Page1PageModule {}
