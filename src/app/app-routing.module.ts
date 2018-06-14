import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogListComponent} from './home/main/blog-list/blog-list.component';
import {BlogBodyComponent} from './home/main/blog-body/blog-body.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', component: BlogListComponent},
            {path: 'blog', component: BlogBodyComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
