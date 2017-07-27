import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersListComponent } from './folders-list.component';

describe('MailBoxListComponent', () => {
  let component: FoldersListComponent;
  let fixture: ComponentFixture<FoldersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
