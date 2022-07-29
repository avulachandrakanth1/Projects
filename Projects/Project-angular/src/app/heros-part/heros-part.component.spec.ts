import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosPartComponent } from './heros-part.component';

describe('HerosPartComponent', () => {
  let component: HerosPartComponent;
  let fixture: ComponentFixture<HerosPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
