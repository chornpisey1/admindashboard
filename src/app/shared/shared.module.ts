import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComfirmDailogComponent } from './components/comfirm-dailog/comfirm-dailog.component';

const SharedComponent = [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ComfirmDailogComponent,
];


@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
