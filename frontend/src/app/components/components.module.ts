import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonsModule } from "./commons/commons.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MapComponent } from './map/map.component';

@NgModule({

    declarations: [
      DashboardComponent,
      MapComponent,
    ],
  
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        CommonsModule
    ],

    exports: [
      DashboardComponent,
    ],
    
  })

  export class ComponentsModule { }