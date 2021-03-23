import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarLayoutComponent } from "./components/commons/layout/sidebar-layout/sidebar-layout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
    //Rotas para o site
    { path: '', 
      component: SidebarLayoutComponent,
      children: [ 
        { path: '', redirectTo: '/dashboard', pathMatch: 'full',            },
        { path: 'dashboard',          component: DashboardComponent,        }
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }