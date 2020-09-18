import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataService } from './services/fetch-data.service';
import {HttpClientModule} from '@angular/common/http';
import { RoundRatingPipe } from './pipes/round-rating.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    RoundRatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
