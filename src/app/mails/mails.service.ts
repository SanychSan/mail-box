import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import uuid from 'uuid';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

@Injectable()
export class MailsService {

  private _db: PouchDB = new PouchDB('mails');
  private _folders = new Subject<IMailsFolder[]>();
  private _mails = new Subject<IMailsMail[]>();

  constructor() {
    this._db
      .createIndex({
        index: { fields: ['type'] }
      })
      .then(res => {
        return this._db.find({
          selector: {
            type: 'mail'
          }
        });
      })
      .then(res => {
        if (!res.docs.length) {
          this._createFakeMails();
        }
      });
  }

  sendMail(mail: IMailsSendMail): Observable<any> {
    return Observable.create(observer => {
      this._db.put({
        _id: uuid.v4(),
        type: 'mail',
        folder: 'Sent Mails',
        read: true,
        createdAt: new Date('2015-09-20').toISOString(),
        ...mail
      })
      .then(res => {
        observer.next(res);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
    });
  }

  getFolders(): void {
    this._db
      .createIndex({
        index: { fields: ['type'] }
      })
      .then(res => {
        return this._db.find({
          selector: {
            type: 'folder'
          }
        });
      })
      .then(res => {
        if (!res.docs.length) {
          return this._createDefaultFolders();
        }

        return res.docs;
      })
      .then(folders => {
        this._folders.next(folders.map(folder => {
          return {
            id: folder._id,
            name: folder.name,
            position: folder.position,
            require: folder.require
          }
        }));
      });
  }

  getMails(folderName: string): void {
    this._db
      .createIndex({
        index: { fields: ['type', 'folder'] }
      })
      .then(res => {
        return this._db.find({
          selector: {
            type: 'mail',
            folder: folderName
          }
        });
      })
      .then(res => res.docs)
      .then(mails => {
        this._mails.next(mails.map(mail => {
          return {
            id: mail._id,
            to: mail.to,
            from: mail.from,
            subject: mail.subject,
            content: mail.content,
            createdAt: mail.createdAt,
            read: mail.read,
            folder: mail.folder
          };
        }));
      });
  }

  setAsRead(mail: IMailsMail): void {
    this._db.get(mail.id).then(doc => {
      return this._db.put({
        ...doc,
        read: true
      });
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  setAsUnread(mail: IMailsMail): void {
    this._db.get(mail.id).then(doc => {
      return this._db.put({
        ...doc,
        read: false
      });
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  moveToSpam(mail: IMailsMail): Promise<any> {
    return this._db.get(mail.id).then(doc => {
      return this._db.put({
        ...doc,
        folder: 'Spam'
      });
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  }

  moveToInbox(mail: IMailsMail): Promise<any> {
    return this._db.get(mail.id).then(doc => {
      return this._db.put({
        ...doc,
        folder: 'Inbox'
      });
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  }

  moveToTrash(mail: IMailsMail): Promise<any> {
    return this._db.get(mail.id).then(doc => {
      return this._db.put({
        ...doc,
        folder: 'Trash'
      });
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  }

  get folders(): Observable<IMailsFolder[]> {
    return Observable.from(this._folders);
  }

  get mails(): Observable<IMailsMail[]> {
    return Observable.from(this._mails);
  }

  private _createDefaultFolders(): void {
    return this._db
      .bulkDocs([
        {
          _id: uuid.v4(),
          type: 'folder',
          position: 0,
          name: 'Inbox',
          require: true
        },
        // {
        //   _id: uuid.v4(),
        //   type: 'folder',
        //   position: 1,
        //   name: 'Starred',
        //   require: true
        // },
        // {
        //   _id: uuid.v4(),
        //   type: 'folder',
        //   position: 2,
        //   name: 'Important',
        //   require: true
        // },
        {
          _id: uuid.v4(),
          type: 'folder',
          position: 3,
          name: 'Sent Mails',
          require: true
        },
        {
          _id: uuid.v4(),
          type: 'folder',
          position: 4,
          name: 'Spam',
          require: true
        },
        {
          _id: uuid.v4(),
          type: 'folder',
          position: 5,
          name: 'Trash',
          require: true
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
                type: 'folder'
              }
            });
          })
          .then(res => res.docs);
      });
  }

  private _createFakeMails(): void {
     this._db.bulkDocs([
      {
        _id: uuid.v4(),
        type: 'mail',
        folder: 'Inbox',
        read: false,
        to: 'alexandr.lupa@gmail.com',
        from: 'andrew@gmail.com',
        subject: '1 Title of mail',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
        createdAt: new Date('2015-09-20').toISOString()
      },
      {
        _id: uuid.v4(),
        type: 'mail',
        folder: 'Inbox',
        read: false,
        to: 'alexandr.lupa@gmail.com',
        from: 'andrew@gmail.com',
        subject: '2 Title of mail',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
        createdAt: new Date('2016-01-02').toISOString()
      },
      {
        _id: uuid.v4(),
        type: 'mail',
        folder: 'Inbox',
        read: false,
        to: 'alexandr.lupa@gmail.com',
        from: 'andrew@gmail.com',
        subject: '3 Title of mail',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
        createdAt: new Date('2017-03-20').toISOString()
      },
      {
        _id: uuid.v4(),
        type: 'mail',
        folder: 'Inbox',
        read: false,
        to: 'alexandr.lupa@gmail.com',
        from: 'andrew@gmail.com',
        subject: '4 Title of mail',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
        createdAt: new Date('2017-07-23').toISOString()
      }
    ]);
  }

}
