import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MomentPageComponent } from './pages/moment-page/moment-page.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
  },
  {
    path: 'compartilhar', component: SharePageComponent,
  },
  {
    path: 'sobre', component: AboutPageComponent,
  },
  {
    path: 'moment/:id', component: MomentPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
