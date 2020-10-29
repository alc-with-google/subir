import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoyaltyListComponent } from './user-loyalty-list.component';

describe('UserLoyaltyListComponent', () => {
  let component: UserLoyaltyListComponent;
  let fixture: ComponentFixture<UserLoyaltyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoyaltyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoyaltyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
