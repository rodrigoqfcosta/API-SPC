import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonsModule } from "./commons/commons.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({

    declarations: [
      DashboardComponent,
    ],
  
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        CommonsModule,
        HttpClient
    ],

    exports: [
      DashboardComponent,
    ],
    
  })

  export class ComponentsModule { }