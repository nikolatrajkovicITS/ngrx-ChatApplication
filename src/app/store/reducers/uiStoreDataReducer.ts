import { UiState } from 'app/store/ui-state';
import { Action } from '@ngrx/store';
import { StoreData } from 'app/store/store-data';
import { UserThreadsLoadedAction, USER_THREADS_LOADED_ACTION } from 'app/store/actions';
import { INITIAL_UI_STATE } from '../ui-state';
import * as _ from 'lodash';

export function storeData(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
   switch (action.type) {
     case USER_THREADS_LOADED_ACTION:
       return handleLoadUserThreadsAction(state, action);
     
    default:
      return state;
   }
}

export function handleLoadUserThreadsAction(state: StoreData, action: UserThreadsLoadedAction): StoreData {
  action.payload;
  return {
      participants: _.keyBy(action.payload.participants, 'id'),
      messages: _.keyBy(action.payload.messages, 'id'),
      threads: _.keyBy(action.payload.threads, 'id')
  };
}