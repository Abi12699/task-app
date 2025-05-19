import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechiclesComponent } from './vechicles.component';

describe('VechiclesComponent', () => {
  let component: VechiclesComponent;
  let fixture: ComponentFixture<VechiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
