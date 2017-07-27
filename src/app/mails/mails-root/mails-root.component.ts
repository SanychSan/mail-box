import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { MailsService } from '../mails.service';
import { UsersService } from '../../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-mails-root',
  templateUrl: './mails-root.component.html',
  styleUrls: ['./mails-root.component.css']
})
export class MailsRootComponent implements OnInit, OnDestroy {

  public modalRef: BsModalRef;

  public routeSubscribtion;
  public foldersSubscribtion;
  public mailsSubscribtion;

  public folders: IMailsFolder[] = [];
  public mails: IMailsMail[] = [];

  public checkedMails: IMailsMail[] = [];

  public term = '';

  public selectedFolder: string;
  public selectedMail: IMailsMail;

  public mailForm: FormGroup;

  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataUsers: Observable<string[]>;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private mailsService: MailsService,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.mailForm = this.formBuilder.group({
      to:      ['', Validators.email],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.routeSubscribtion = this.route.queryParams.pluck('folder').subscribe(folder => {
      if (folder) {
        this.selectedFolder = folder as string;
      }
    });

    this.foldersSubscribtion = this.mailsService.folders.subscribe(folders => {
      this.folders = folders.sort((a, b) => a.position - b.position);
      if (!this.selectedFolder && this.folders.length) {
        this.selectedFolder = this.folders[0].name;
        this.router.navigate(['mails'], { queryParams: { folder: this.selectedFolder } });
      }

      this.mailsService.getMails(this.selectedFolder);
    });
    this.mailsService.getFolders();

    this.mailsSubscribtion = this.mailsService.mails.subscribe(mails => {
      this.mails = mails.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    });

    this.dataUsers = Observable
      .create((observer: any) => {
        observer.next(this.mailForm.controls.to.value);
      })
      .mergeMap((term: string) => this.userService.getUsersAsObservable(term));
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }

  ngOnDestroy(): void {
    this.foldersSubscribtion.unsubscribe();
    this.mailsSubscribtion.unsubscribe();
    this.routeSubscribtion.unsubscribe();
  }

  selectFolder(folder: IMailsFolder): void {
    this.checkedMails = [];
    this.selectedMail = null;
    this.selectedFolder = folder.name;
    this.mailsService.getMails(folder.name);
    this.router.navigate(['mails'], { queryParams: { folder: this.selectedFolder } });
  }

  selectMail(mail: IMailsMail): void {
    this.selectedMail = mail;
    if (!this.selectedMail.read) {
      this.selectedMail.read = true;
      this.mailsService.setAsRead(mail);
    }
  }

  checkMail(mail: IMailsMail): void {
    const index = this.checkedMails.indexOf(mail);

    if (this.checkedMails.includes(mail)) {
      this.checkedMails = this.checkedMails.filter(cmail => cmail !== mail);
    } else {
      this.checkedMails = this.checkedMails.concat([mail]);
    }
  }

  selectAll(): void {
    this.checkedMails = this.mails;
  }

  unselectAll(): void {
    this.checkedMails = [];
  }

  toggleAll(): void {
    if (this.mails.every(mail => this.checkedMails.includes(mail))) {
      this.unselectAll();
    } else {
      this.selectAll();
    }
  }

  allIsChecked(): boolean {
    return (this.mails && this.mails.length) && this.mails.every(mail => this.checkedMails.includes(mail));
  }

  markAsReadGroup(mails: IMailsMail[]): void {
    mails.forEach(mail => this.markAsRead(mail));
  }

  markAsUnreadGroup(mails: IMailsMail[]): void {
    mails.forEach(mail => this.markAsUnread(mail));
  }

  toggleSpam(): void {
    let mails = [];
    if (this.checkedMails.length) {
      mails = this.checkedMails;
    } else if (this.selectedMail) {
      mails = [this.selectedMail];
    }

    Promise
      .all(mails.map(mail => {
        if (mail === this.selectedMail) {
          this.selectedMail = null;
        }

        if (this.selectedFolder === 'Spam') {
          return this.mailsService.moveToInbox(mail);
        }

        return this.mailsService.moveToSpam(mail);
      }))
      .then(res => {
        this.mailsService.getMails(this.selectedFolder);
      });
  }

  moveToSpam(): void {
    let mails = [];
    if (this.checkedMails.length) {
      mails = this.checkedMails;
    } else if (this.selectedMail) {
      mails = [this.selectedMail];
    }

    Promise
      .all(mails.map(mail => {
        if (mail === this.selectedMail) {
          this.selectedMail = null;
        }

        return this.mailsService.moveToSpam(mail);
      }))
      .then(res => {
        this.mailsService.getMails(this.selectedFolder);
      });
  }

  moveToTrash(): void {
    let mails = [];
    if (this.checkedMails.length) {
      mails = this.checkedMails;
      this.checkedMails = [];
    } else if (this.selectedMail) {
      mails = [this.selectedMail];
    }

    Promise
      .all(mails.map(mail => {
        if (mail === this.selectedMail) {
          this.selectedMail = null;
        }

        if (this.selectedFolder === 'Trash') {
          return this.mailsService.moveToInbox(mail);
        }

        return this.mailsService.moveToTrash(mail);
      }))
      .then(res => {
        this.mailsService.getMails(this.selectedFolder);
      });
  }

  moveToInbox(): void {
    let mails = [];
    if (this.checkedMails.length) {
      mails = this.checkedMails;
      this.checkedMails = [];
    } else if (this.selectedMail) {
      mails = [this.selectedMail];
    }

    Promise
      .all(mails.map(mail => {
        if (mail === this.selectedMail) {
          this.selectedMail = null;
        }

        return this.mailsService.moveToInbox(mail);
      }))
      .then(res => {
        this.mailsService.getMails(this.selectedFolder);
      });
  }

  markAsRead(mail: IMailsMail): void {
    if (!mail.read) {
      mail.read = true;
      this.mailsService.setAsRead(mail);
    }
  }

  markAsUnread(mail: IMailsMail): void {
    if (mail.read) {
      mail.read = false;
      this.mailsService.setAsUnread(mail);
    }
  }

  sendMail(): void {
    if (this.mailForm.valid) {
      this.mailsService
        .sendMail({
          to: this.mailForm.controls.to.value,
          subject: this.mailForm.controls.subject.value,
          content: this.mailForm.controls.content.value,
          from: 'me'
        })
        .subscribe(res => {
          console.log(res);
          this.modalRef.hide();
          this.mailForm.reset();
          this.mailsService.getMails(this.selectedFolder);
        });

      this.userService.probablyNewUser(this.mailForm.controls.to.value);
    }
  }

  openModalNewMail(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
