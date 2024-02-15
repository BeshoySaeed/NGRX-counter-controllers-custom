import { AppReducer } from './ngrx-state/appState';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { CounterControlsComponent } from './component/counter-controls/counter-controls.component';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PostComponent } from './component/post/post.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule  } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CounterControlsComponent,
    NavBarComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([]),
    FormsModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
