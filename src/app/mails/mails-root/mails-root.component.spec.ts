import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsRootComponent } from './mails-root.component';

describe('MailsRootComponent', () => {
  let component: MailsRootComponent;
  let fixture: ComponentFixture<MailsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
