import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** My modules */
import { SharedModule } from './modules/shared/shared.module';

/** Components */
import { AppComponent } from './app.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { RemoveConfirmationDialogComponent } from './components/remove-confirmation-dialog/remove-confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutConfirmationDialogComponent,
    RemoveConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }