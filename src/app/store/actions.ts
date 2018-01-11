import { AllUserData } from '../../../shared/to/all-user-data';
import { Action } from '@ngrx/store';

export const USER_THREADS_LOADED_ACTION = 'LOAD_THREADS_LOADED_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';

export class LoadUserThreadsAction implements Action {
    readonly type = LOAD_USER_THREADS_ACTION;
}

/** This file will contain all the actions of our chap application */
export class UserThreadsLoadedAction implements Action {
    readonly type = USER_THREADS_LOADED_ACTION;

    constructor(public payload?:AllUserData) {

    }
}
