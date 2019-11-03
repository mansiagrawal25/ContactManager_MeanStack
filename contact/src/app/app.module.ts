import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ShowcomponentComponent } from './showcomponent/showcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService} from './contacts.service'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    ShowcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

    
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
