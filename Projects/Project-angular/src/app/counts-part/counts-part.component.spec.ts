import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsPartComponent } from './counts-part.component';

describe('CountsPartComponent', () => {
  let component: CountsPartComponent;
  let fixture: ComponentFixture<CountsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
