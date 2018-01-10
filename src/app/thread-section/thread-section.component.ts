import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "../services/threads.service";
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { Thread } from '../../../shared/model/thread';
import { LoadUserThreadAction } from '../store/actions';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { ThreadSummaryVM } from './thread-summary.vm';
import { mapStateToUsername } from './mapStateToUsername';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  username$: Observable<string>;
  unreadMessageCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;

  constructor(private threadsService: ThreadsService,
    private store: Store<ApplicationState>) {
    this.username$ = store.select(usernameSelector);

    this.unreadMessageCounter$ = store
      .skip(1)
      .map(this.mapStateToUndreadMessagesCounter);

    this.threadSummaries$ = store.select(stateToThreadSummariesSelector);
  }

  mapStateToUndreadMessagesCounter(state: ApplicationState): number {
    const currentUserId = state.uiState.userId;  // current user

    return _.values<Thread>(state.storeData.threads)
      .reduce(
      (acc, thread) => acc + thread.participants[currentUserId]
      , 0);
  }

  ngOnInit() {
    this.threadsService.loadUserThreads()
      .subscribe(
      allUserData => this.store.dispatch(
        new LoadUserThreadAction(allUserData)
      )
      );
  }

}
