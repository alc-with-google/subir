import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoyaltyDetailsComponent } from './user-loyalty-details.component';

describe('UserLoyaltyDetailsComponent', () => {
  let component: UserLoyaltyDetailsComponent;
  let fixture: ComponentFixture<UserLoyaltyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoyaltyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoyaltyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
