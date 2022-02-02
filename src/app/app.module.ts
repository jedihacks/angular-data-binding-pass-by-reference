import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayExampleComponent } from './components/array-example/array-example.component';
import { PeopleBuilderComponent } from './components/people-builder/people-builder.component';
import { PersonComponent } from './components/person/person.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayExampleComponent,
    PeopleBuilderComponent,
    PersonComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
