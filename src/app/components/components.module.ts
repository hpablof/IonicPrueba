import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent} from './header/header.component';
import { Component1Component } from './component1/component1.component';
import { ItemUserComponent } from './item-user/item-user.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
//import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    HeaderComponent, 
    Component1Component, 
    ItemUserComponent,
    MenuComponent
  ],
  exports:[
    HeaderComponent,
    Component1Component,
    ItemUserComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
