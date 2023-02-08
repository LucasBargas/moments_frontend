import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AreaComponent } from './layouts/area/area.component';
import { ContainerComponent } from './components/container/container.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    ContainerComponent,
    HomepageComponent,
    SharePageComponent,
    AboutPageComponent,
    LoadingComponent,
    MomentFormComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
