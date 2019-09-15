import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Accord1Component } from './accord1/accord1.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SassComponent } from './sass/sass.component';
import { XmlComponent } from './xml/xml.component';
import { JqueryComponent } from './jquery/jquery.component';
import { Accord2Component } from './accord2/accord2.component';
import { Accord3Component } from './accord3/accord3.component';
import { Accord4Component } from './accord4/accord4.component';
import { Accord5Component } from './accord5/accord5.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: 'html', component: HtmlComponent },
  { path: 'css', component: CssComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'jquery', component: JqueryComponent },
  { path: 'sass', component: SassComponent },
  { path: 'xml', component: XmlComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Accord1Component,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    SassComponent,
    XmlComponent,
    Accord2Component,
    Accord3Component,
    Accord4Component,
    Accord5Component,
    JqueryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
