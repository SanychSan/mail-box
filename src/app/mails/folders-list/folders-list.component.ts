import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.css']
})
export class FoldersListComponent {

  @Input() folders;
  @Input() selectedFolder: IMailsFolder;

  @Output() onSelectFolder = new EventEmitter<IMailsFolder>();

  selectFolder(folder: IMailsFolder): void {
    this.onSelectFolder.emit(folder);
  }

}
