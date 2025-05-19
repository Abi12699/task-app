import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVechicelComponent } from './create-vechicel.component';

describe('CreateVechicelComponent', () => {
  let component: CreateVechicelComponent;
  let fixture: ComponentFixture<CreateVechicelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVechicelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVechicelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
