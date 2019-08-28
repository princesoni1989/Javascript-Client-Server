import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectObservableService {
  private subject = new Subject<any>()

  constructor() {
  }

  sendMessage(message: string) {
    this.subject.next(message)
  }

  clearMessage() {
    this.subject.next('')
  }

  getObservable(): Observable<string> {
    return this.subject.asObservable();
  }
}
