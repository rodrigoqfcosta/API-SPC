import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './components/commons/commons.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

@NgModule({
  
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonsModule,
    ComponentsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
