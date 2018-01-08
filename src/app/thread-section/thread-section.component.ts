import { Component, OnInit } from '@angular/core';
import { ThreadsService } from "../services/threads.service";
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { Thread } from '../../../shared/model/thread';
import { LoadUserThreadAction } from '../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  username$: Observable<string>;
  unreadMessageCounter$: Observable<number>;

  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationState>) {
      this.username$ = store
          .skip(1)
          .map(this.mapStateToUsername);

      this.unreadMessageCounter$ = store.skip(1)
                                        .map(this.mapStateToUndreadMessagesCounter);

  }

  mapStateToUsername(state: ApplicationState): string {
     return state.storeData.participants[state.uiState.userId].name;
  }

  mapStateToUndreadMessagesCounter(state: ApplicationState): number {
    const currentUserId = state.uiState.currentThreadId;  // current user
   
    return _.values<Thread>(state.storeData.threads)
        .reduce(
          (acc, thread)  => acc + thread.participants[currentUserId]
          , 0);
  }

  ngOnInit() {
  
  
    // this.threadsService.loadUserThreads()
    //     .subscribe(
    //       allUserData => this.store.dispatch(
    //         new LoadUserThreadAction(allUserData)
    //       )
    //     );
  }

}
