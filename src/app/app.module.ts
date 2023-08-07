import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ColletionModule } from './colletion/colletion.module';
import { ColletionComponent } from './colletion/colletion.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { TrimPipe } from './pipes/trim.pipe';
import { DoublePipe } from './pipes/double.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColletionComponent,
    AboutComponent,
    IndexComponent,
    TrimPipe,
    DoublePipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ColletionModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
