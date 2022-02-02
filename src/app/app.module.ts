import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ArrayExampleComponent } from './components/array-example/array-example.component';
import { PeopleBuilderComponent } from './components/people-builder/people-builder.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    ArrayExampleComponent,
    PeopleBuilderComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
