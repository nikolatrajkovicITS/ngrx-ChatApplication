import { Action } from "@ngrx/store";
import { AllUserData } from '../../../shared/to/all-user-data';

export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';

/** This file will contain all the actions of our chap application */
export class LoadUserThreadAction implements Action {
    readonly type = 'LOAD_USER_THREADS_ACTION';

    constructor(public payload?:AllUserData) {

    }
}