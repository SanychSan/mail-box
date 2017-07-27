import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import uuid from 'uuid';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

@Injectable()
export class UsersService {

  private _db: PouchDB = new PouchDB('users');
  private _users = new Subject<IUsersUser[]>();


  constructor() {
    this.getUsers();
  }

  getUsers() {
    return this._db
      .createIndex({
        index: { fields: ['type'] }
      })
      .then(res => {
        return this._db.find({
          selector: {
            type: 'user'
          }
        });
      })
      .then(res => {
        if (!res.docs.length) {
          return this._createFakeUsers();
        }

        return res.docs;
      })
      .then(users => {
        this._users.next(users.map(user => {
          return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }
        }));
        return this._users;
      });
  }

  getUser(userId: string): Promise<IUsersUser> {
    return this._db.get(userId).then(res => {
      return {
        id: res._id,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email
      }
    });
  }

  remove(user): Promise<any> {
    return this._db.get(user.id).then(doc => {
      return this._db.remove(doc._id, doc._rev);
    }).then(res => {
      console.log(res);
      return res;
    }).catch(function (err) {
      console.log(err);
      return err;
    });
  }

  update(user: IUsersUser): Promise<any> {
    return this._db.get(user.id).then(doc => {
      return this._db.put({
        ...doc,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
    }).then(res => {
      console.log(res);
      return res;
    }).catch(function (err) {
      console.log(err);
      return err;
    });
  }

  add(user: IUsersUser): Promise<any> {
    return this._db.put({
      _id: uuid.v4(),
      type: 'user',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email
    })
    .then(res => {
      console.log(res);
      return res;
    }).catch(function (err) {
      console.log(err);
      return err;
    });
  }

  probablyNewUser(email: string): void {
    this._db
      .createIndex({
        index: { fields: ['type', 'email'] }
      })
      .then(res => {
        return this._db.find({
          selector: {
            type: 'user',
            email
          }
        });
      })
      .then(res => {
        if (!res.docs.length) {
          this.add({ firstName: '', lastName: '', email });
        }
      });
  }

  getUsersAsObservable(token: string): Observable<string[]> {
    const query = new RegExp(token, 'ig');

    return Observable.fromPromise(
      this._db
        .createIndex({
          index: { fields: ['type'] }
        })
        .then(res => {
          return this._db.find({
            selector: {
              type: 'user'
            }
          });
        })
        .then(res => {
          if (res.docs.length) {
            return res.docs.map(user => {
              return user.email;
            });
          }

          return [];
        })
        .then(res => {
          return res.filter((user: string) => {
            return query.test(user);
          });
        })
    );
  }

  get users(): Observable<IUsersUser[]> {
    return Observable.from(this._users);
  }

  private _createFakeUsers() {
    return this._db
      .bulkDocs([
        {
          _id: uuid.v4(),
          type: 'user',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com'
        },
        {
          _id: uuid.v4(),
          type: 'user',
          email: 'vova@gmail.com'
        },
        {
          _id: uuid.v4(),
          type: 'user',
          email: 'ben1958@m.su'
        }
      ])
      .then(() => {
        return this._db
          .createIndex({
            index: { fields: ['type'] }
          })
          .then(() => {
            return this._db.find({
              selector: {
                type: 'user'
              }
            });
          })
          .then(res => res.docs);
      });
  }
}
