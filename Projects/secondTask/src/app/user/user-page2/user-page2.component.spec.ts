import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPage2Component } from './user-page2.component';

describe('UserPage2Component', () => {
  let component: UserPage2Component;
  let fixture: ComponentFixture<UserPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
