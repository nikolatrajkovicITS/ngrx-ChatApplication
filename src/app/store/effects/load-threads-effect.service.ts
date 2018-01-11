import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction } from 'app/store/actions';
import { AllUserData } from '../../../../shared/to/all-user-data';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$: Actions,
              private threadsService: ThreadsService) { }

  @Effect() userThreads$: Observable<Action> = this.actions$
       .ofType(LOAD_USER_THREADS_ACTION)
       .debug(val => console.log("action received", val))
       .switchMap(() => this.threadsService.loadUserThreads())
       .debug(val => console.log("data received via HTTP", val))
       .map(AllUserData => new UserThreadsLoadedAction(AllUserData));
       
}
