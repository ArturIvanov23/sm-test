import {NetWeightService} from './services/net-weight.service';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';




import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MenuItem } from 'primeng/api';


import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogComponent} from './dialog/dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputNumberModule,
    ButtonModule,
    // TableModule,
    // CdkVirtualScrollViewport,
    ConfirmDialogModule,
    AccordionModule,
    TableModule,
    TooltipModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [DataService, NetWeightService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
