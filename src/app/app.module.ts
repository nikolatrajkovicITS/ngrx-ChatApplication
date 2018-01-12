import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, Action } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ThreadsService } from "./services/threads.service";
import { ApplicationState, INITIAL_APPLICATION_STATE } from 'app/store/application-state';
import { USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction } from './store/actions';
import * as _ from 'lodash';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { LoadThreadsEffectService } from 'app/store/effects/load-threads-effect.service';
import { UiState } from 'app/store/ui-state';
import { INITIAL_UI_STATE } from './store/ui-state';
import { StoreData } from 'app/store/store-data';
import { uiState } from './store/reducers/uiStateReducer';
import { storeData } from './store/reducers/uiStoreDataReducer';
import { combineReducers } from '@ngrx/store/src/utils';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EffectsModule.forRoot([LoadThreadsEffectService]),
    StoreModule.forRoot(combineReducers({uiState, storeData}), INITIAL_APPLICATION_STATE),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    ThreadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
