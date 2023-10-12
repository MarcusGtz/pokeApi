import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPagesComponent,
    HomePageComponent,
    SidebarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPagesComponent,
    HomePageComponent,
    SidebarComponent,
    SearchComponent,
  ]

})
export class SharedModule { }
