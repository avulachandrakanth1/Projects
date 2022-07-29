import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServicesPartComponent } from './more-services-part.component';

describe('MoreServicesPartComponent', () => {
  let component: MoreServicesPartComponent;
  let fixture: ComponentFixture<MoreServicesPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreServicesPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServicesPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
