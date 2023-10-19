import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    SearchComponent,
  ]

})
export class SharedModule { }
