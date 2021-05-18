import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarLayoutComponent } from "./layout/sidebar-layout/sidebar-layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { UploadArchiveComponent } from "./upload-archive/upload-archive.component";

@NgModule({

    declarations: [
      HeaderComponent,
      SidebarComponent,
      FooterComponent,
      SidebarLayoutComponent,
      UploadArchiveComponent
    ],
  
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpClient
    ],

    exports: [
      HeaderComponent,
      SidebarComponent,
      FooterComponent,
      SidebarLayoutComponent,
      UploadArchiveComponent
    ]
  })
  
  export class CommonsModule { }
  