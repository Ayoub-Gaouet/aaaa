import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvionsComponent } from './add-avions.component';

describe('AddAvionsComponent', () => {
  let component: AddAvionsComponent;
  let fixture: ComponentFixture<AddAvionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAvionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAvionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
