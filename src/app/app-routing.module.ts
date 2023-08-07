import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColletionComponent } from './colletion/colletion.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './colletion/first/first.component';
import { IndexComponent } from './index/index.component';
import { CalculatepanComponent } from './home/calculatepan/calculatepan.component';
import { DollormeterComponent } from './home/dollormeter/dollormeter.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'calpan', component: CalculatepanComponent },
    { path: 'dollor', component: DollormeterComponent },
  ] },
  { path: 'collection', component: ColletionComponent, children: [
    { path: 'first', component: FirstComponent },
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
