import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BlogCoverComponent } from './main/blog-cover/blog-cover.component';
import { BlogBodyComponent } from './main/blog-body/blog-body.component';
import { BlogListComponent } from './main/blog-list/blog-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        BlogCoverComponent,
        BlogBodyComponent,
        BlogListComponent
    ]
})
export class HomeModule {
}
