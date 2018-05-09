import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ReplaySubject, Observable} from 'rxjs/Rx';

/**
 * Dummy service for retrieving menu in application.
 *
 */
@Injectable()
export class MenuServices {
  private _subject = new ReplaySubject(1);

  constructor(public http: Http) {
    this.http.get('/assets/data/menu.json').subscribe(this._subject);
  }

  getMenu(): any {

    return Observable.create((observer: any) => {

      this._subject.subscribe((data: any) => {

        observer.next(data);

      });

    });
  }
}
