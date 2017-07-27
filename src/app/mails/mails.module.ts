import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MailsRootComponent } from './mails-root/mails-root.component';
import { ElapsedPipe } from './elapsed.pipe';
import { FoldersListComponent } from './folders-list/folders-list.component';
import { MailsListComponent } from './mails-list/mails-list.component';
import { MailsService } from './mails.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [
    MailsService
  ],
  exports: [
    MailsRootComponent
  ],
  declarations: [
    MailsRootComponent,
    ElapsedPipe,
    FoldersListComponent,
    MailsListComponent,
    FilterPipe
  ]
})
export class MailsModule { }
