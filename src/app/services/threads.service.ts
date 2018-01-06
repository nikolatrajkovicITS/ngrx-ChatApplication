import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserData } from '../shared/model/to/all-user-data';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads() : Observable<AllUserData> {
      return this.http.get('/api/threads')
          .map(res => res.json());
  }

}
