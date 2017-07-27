import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.css']
})
export class MailsListComponent {

  @Input() mails;
  @Input() selectedMail: IMailsMail;
  @Input() checkedMails: IMailsMail[];
  @Input() term: string;

  @Output() onSelectMail = new EventEmitter<IMailsMail>();
  @Output() onCheckMail = new EventEmitter<IMailsMail>();

  selectMail(mail: IMailsMail): void {
    this.onSelectMail.emit(mail);
  }

  checkMail(mail: IMailsMail): void {
    this.onCheckMail.emit(mail);
  }

  isChecked(mail: IMailsMail): boolean {
    return this.checkedMails.includes(mail);
  }

}
